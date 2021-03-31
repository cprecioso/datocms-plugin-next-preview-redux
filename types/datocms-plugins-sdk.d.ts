declare module "datocms-plugins-sdk" {
  import * as CMA from "datocms-cma"

  namespace DatoCmsPlugin {
    type IndexedById<T extends { id: any }> = {
      [id: T["id"]]: T
    }

    interface Parameters {
      global: Record<string, any>
      instance: Record<string, any>
    }

    interface Theme
      extends Record<
        | "accentColor"
        | "darkColor"
        | "lightColor"
        | "primaryColor"
        | "semiTransparentAccentColor",
        string
      > {}

    interface Plugin {
      site: CMA.Site
      itemType: CMA.ModelBlock
      itemTypes: IndexedById<CMA.ModelBlock>
      fields: IndexedById<CMA.Field>
      itemId: string
      itemStatus: CMA.FluffyStatus
      isSubmitting: boolean
      field: CMA.Field
      currentUser: CMA.User
      users: IndexedById<CMA.User>
      disabled: boolean
      parameters: Parameters
      locale: string
      fieldPath: string
      placeholder: string
      theme: Theme

      getFieldValue<T>(...pathChunks: string[]): T
      setFieldValue<T>(...pathChunks: string[], newValue: T): Promise<void>
      addFieldChangeListener<T>(
        ...pathChunks: string[],
        callbackFn: (newValue: T) => void
      ): () => void
      addChangeListener(
        ...pathChunks: (keyof Plugin)[],
        callbackFn: (newValue: T) => void
      ): () => void
      toggleField(...pathChunks: string[], visible: boolean): Promise<void>
      disableField(...pathChunks: string[], disable: boolean): Promise<void>
      scrollToField(...pathChunks: string[]): void
      startAutoResizer(): void
      stopAutoResizer(): void
      updateHeight(height?: number): void

      createNewItem(itemTypeId: number): Promise<CMA.Record | null>
      selectItem(
        itemTypeId: number,
        options?: { multiple?: false }
      ): Promise<CMA.Record | null>
      selectItem(
        itemTypeId: number,
        options: { multiple: true }
      ): Promise<CMA.Record[] | null>
      editItem(itemId: number): Promise<CMA.Record | null>
      saveCurrentItem(): Promise<void>
      selectUpload(options?: { multiple?: false }): Promise<CMA.Upload | null>
      selectUpload(options: { multiple: true }): Promise<CMA.Upload[] | null>
      editUpload(
        uploadId: string
      ): Promise<(CMA.Upload & { deleted?: boolean }) | null>
      editUploadMetadata(
        uploadMetadata: CMA.UploadAttributes
      ): Promise<CMA.UploadAttributes | null>
      notice(message: string): Promise<void>
      alert(message: string): Promise<void>
    }

    function init(cb?: (plugin: Plugin) => void): Promise<Plugin>
  }

  export = DatoCmsPlugin
}
