import DatoCmsPlugin from "datocms-plugins-sdk"
import "datocms-plugins-sdk/dist/sdk.css"
import {
  computed,
  IComputedValue,
  observable,
  onBecomeObserved,
  onBecomeUnobserved,
} from "mobx"
import { observer } from "mobx-react-lite"
import { render } from "react-dom"

type Plugin = DatoCmsPlugin.Plugin

const applyKeyPath = (obj: any, keyPath: string[]) => {
  for (const part of keyPath) obj = obj[part]
  return obj
}

const pluginValue = (plugin: Plugin, ...keyPath: string[]) => {
  const box = observable.box(applyKeyPath(plugin, keyPath) as string)
  let unsubscribe: null | (() => void) = null

  onBecomeObserved(box, () => {
    unsubscribe?.()
    unsubscribe = plugin.addChangeListener(
      ...keyPath,
      // @ts-expect-error
      (newValue) => box.set(newValue)
    )
  })

  onBecomeUnobserved(box, () => {
    unsubscribe?.()
    unsubscribe = null
  })

  return box
}

const fieldValue = (plugin: Plugin, ...keyPath: string[]) => {
  const box = observable.box(plugin.getFieldValue(...keyPath) as string)
  let unsubscribe: null | (() => void) = null

  onBecomeObserved(box, () => {
    unsubscribe?.()
    unsubscribe = plugin.addFieldChangeListener(
      ...keyPath,
      // @ts-expect-error
      (newValue) => box.set(newValue)
    )
  })

  onBecomeUnobserved(box, () => {
    unsubscribe?.()
    unsubscribe = null
  })

  return box
}

const Buttons = observer<{
  previewUrl: IComputedValue<string>
  publishedUrl: IComputedValue<string>
}>(({ previewUrl, publishedUrl }) => (
  <>
    <a href={previewUrl.get()} target="_blank">
      <button className="DatoCMS-button">Preview</button>
    </a>
    <a href={publishedUrl.get()} target="_blank">
      <button className="DatoCMS-button">See published</button>
    </a>
  </>
))

DatoCmsPlugin.init(function (plugin) {
  plugin.startAutoResizer()

  const v = pluginValue.bind(null, plugin)
  const f = fieldValue.bind(null, plugin)

  const fields = new Map<string, ReturnType<typeof f>>()

  const locale = v("locale")
  const entityPath = v("parameters", "instance", "entityPath")

  const replacedEntityPath = computed(() => {
    const l = locale.get()
    return (
      (l ? `/${l}` : "") +
      `${entityPath}`.replace(/\[(.+?)\]/g, (_, apiKey: string) => {
        {
          const v = fields.get(apiKey)?.get()
          if (v) return v
        }

        const obs = f(apiKey)
        fields.set(apiKey, obs)
        return obs.get()
      })
    )
  })

  const previewPath = v("parameters", "global", "previewPath")
  const previewSecret = v("parameters", "global", "previewSecret")
  const instanceUrl = v("parameters", "global", "instanceUrl")

  const previewUrl = computed(() => {
    const url = new URL(previewPath.get(), instanceUrl.get())
    url.searchParams.set("slug", replacedEntityPath.get())
    url.searchParams.set("secret", previewSecret.get())
    return url.href
  })

  const publishedUrl = computed(
    () => new URL(replacedEntityPath.get(), instanceUrl.get()).href
  )

  render(
    <Buttons previewUrl={previewUrl} publishedUrl={publishedUrl} />,
    document.getElementById("app")
  )
})
