declare module "datocms-cma" {
  export interface Coordinate {
    access_token?: APIToken
    account?: Account
    build_event?: DeployActivity
    build_trigger?: CoordinateBuildTrigger
    daily_usage?: DailyUsageClass
    editing_session?: EditingSession
    environment?: Environment
    field?: Field
    fieldset?: CoordinateFieldset
    item?: Record
    item_type?: ModelBlock
    item_type_filter?: ModelFilter
    item_version?: RecordVersion
    job?: AsyncronousJob
    job_result?: JobResult
    maintenance_mode?: MaintenanceMode
    menu_item?: MenuItem
    plugin?: Plugin
    public_info?: PublicInfoClass
    role?: Role
    scheduled_publication?: ScheduledPublication
    scheduled_unpublishing?: ScheduledUnpublishing
    search_result?: SearchResult
    session?: Session
    site?: Site
    site_invitation?: Invitation
    site_plan?: Plan
    sso_group?: SSOGroup
    sso_settings?: SSOSettings
    sso_user?: SSOUser
    subscription_feature?: SubscriptionFeature
    subscription_limit?: SubscriptionLimit
    upload?: Upload
    upload_filter?: UploadsFilter
    upload_request?: UploadPermission
    upload_smart_tag?: SmartTags
    upload_tag?: ManualTags
    usage_counter?: UsageCounters
    user?: Collaborator
    webhook?: Webhook
    webhook_call?: WebhookCall
    white_label_settings?: WhiteLabelSettings
  }

  /**
   * An API token allows access to our API. It is linked to a Role, which describes what
   * actions can be performed.
   */
  export interface APIToken {
    attributes: AccessTokenAttributes
    id: string
    relationships: AccessTokenRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface AccessTokenAttributes {
    /**
     * Whether this API token can access the Content Delivery API published content endpoint
     */
    can_access_cda: boolean
    /**
     * Whether this API token can access the Content Delivery API draft content endpoint
     */
    can_access_cda_preview: boolean
    /**
     * Whether this API token can access the Content Management API
     */
    can_access_cma: boolean
    hardcoded_type: null | string
    /**
     * Name of API token
     */
    name: string
    /**
     * The actual API token
     */
    token?: string
  }

  /**
   * JSON API links
   */
  export interface AccessTokenRelationships {
    /**
     * Role
     */
    role: PurpleRole
  }

  /**
   * Role
   */
  export interface PurpleRole {
    data: RoleData | null
  }

  /**
   * JSON API data
   */
  export interface RoleData {
    id: string
    type: string
  }

  /**
   * DatoCMS account
   */
  export interface Account {
    attributes: AccountAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface AccountAttributes {
    /**
     * Company name
     */
    company: null | string
    /**
     * Email
     */
    email: string
    /**
     * First name
     */
    first_name: null | string
    /**
     * Last name
     */
    last_name: null | string
    /**
     * Password
     */
    password?: string
  }

  /**
   * Represents an event occurred during the deploy process of your administrative area.
   */
  export interface DeployActivity {
    attributes: BuildEventAttributes
    id: string
    relationships: BuildEventRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface BuildEventAttributes {
    /**
     * The moment the activity occurred
     */
    created_at: Date
    /**
     * Any details regarding the event
     */
    data: { [key: string]: any }
    /**
     * The type of activity
     */
    event_type: PurpleEventType
  }

  /**
   * The type of activity
   */
  export enum PurpleEventType {
    IndexingFailure = "indexing_failure",
    IndexingStarted = "indexing_started",
    IndexingSuccess = "indexing_success",
    RequestAborted = "request_aborted",
    RequestFailure = "request_failure",
    RequestSuccess = "request_success",
    ResponseFailure = "response_failure",
    ResponseSuccess = "response_success",
    ResponseUnprocessable = "response_unprocessable",
  }

  /**
   * JSON API links
   */
  export interface BuildEventRelationships {
    /**
     * Source build trigger
     */
    build_trigger: BuildTrigger
  }

  /**
   * Source build trigger
   */
  export interface BuildTrigger {
    data: BuildTriggerData
  }

  /**
   * JSON API data
   */
  export interface BuildTriggerData {
    id: string
    type: string
  }

  /**
   * Configuration for different build triggers. You can have different staging and production
   * environments in order to test your site before final deploy
   */
  export interface CoordinateBuildTrigger {
    attributes: BuildTriggerAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface BuildTriggerAttributes {
    /**
     * The deploy adapter
     */
    adapter: string
    /**
     * Additional configuration for deploy
     */
    adapter_settings: { [key: string]: any }
    /**
     * Deploy on scheduled publication
     */
    autotrigger_on_scheduled_publications: boolean
    /**
     * Status of last deploy
     */
    build_status: string
    /**
     * Public url of the site
     */
    frontend_url: null | string
    /**
     * Enable scraper on the site
     */
    indexing_enabled: boolean
    /**
     * Status of site scraper
     */
    indexing_status: string
    /**
     * Timestamp of the last deploy
     */
    last_build_completed_at: Date | null
    /**
     * Name of the environment
     */
    name: string
    /**
     * Unique token of the webhook
     */
    webhook_token?: string
    /**
     * Notification webhook URL
     */
    webhook_url: string
  }

  /**
   * DatoCMS resources usage organized by day
   */
  export interface DailyUsageClass {
    attributes: DailyUsageAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface DailyUsageAttributes {
    /**
     * Uploads requests traffic
     */
    assets_traffic_bytes: number
    /**
     * Number of API calls to content delivery API
     */
    cda_api_calls: number
    /**
     * Content delivery API traffic
     */
    cda_traffic_bytes: number
    /**
     * Number of API calls to content management API
     */
    cma_api_calls: number
    /**
     * The date the data are referring to
     */
    date: Date
    /**
     * Video streaming seconds
     */
    mux_delivered_seconds: number
  }

  /**
   * Session track users movements in the administrative area, and allows locking a record
   * when editing it.
   */
  export interface EditingSession {
    attributes: EditingSessionAttributes
    id: string
    relationships: EditingSessionRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface EditingSessionAttributes {
    /**
     * User entered at
     */
    last_activity_at: Date | null
    /**
     * User locked record at
     */
    locked_at: Date | null
  }

  /**
   * JSON API links
   */
  export interface EditingSessionRelationships {
    /**
     * The active item in the session
     */
    active_item: ActiveItem
    /**
     * The item type of the active item in the session
     */
    active_item_type: ActiveItemType
    /**
     * The entity (account/editor/access token) who has accessed the record
     */
    editor: PurpleEditor
  }

  /**
   * The active item in the session
   */
  export interface ActiveItem {
    data: ActiveItemData
  }

  /**
   * JSON API data
   */
  export interface ActiveItemData {
    id: string
    type: string
  }

  /**
   * The item type of the active item in the session
   */
  export interface ActiveItemType {
    data: ActiveItemTypeData
  }

  /**
   * JSON API data
   */
  export interface ActiveItemTypeData {
    id: string
    type: string
  }

  /**
   * The entity (account/editor/access token) who has accessed the record
   */
  export interface PurpleEditor {
    data: PurpleData
  }

  /**
   * JSON API data
   */
  export interface PurpleData {
    id: string
    type: string
  }

  /**
   *
   * [Environments](https://www.datocms.com/docs/general-concepts/primary-and-sandbox-environments)
   * make it easier for your development team to **manage and maintain content structure once
   * your content has been published**. You can think of environments like code branches:
   * great for testing, development and pre-production environments.
   *
   * By default, every project has one environment, called **primary environment**, which is
   * meant to be used for the regular editorial workflow. Additionally, multiple **sandbox
   * environments** can be created by developers to safely test/experiment new changes in the
   * content.
   *
   * Sandbox environments start out as **exact copies of one of the existing environments**
   * (ie. the primary one). The process of creating a new sandbox starting off from an
   * existing environment is called fork.
   *
   * Each environment is identified by a name (ie. `master`) and stores the following
   * information:
   *
   * - Models
   * - Records
   * - Uploads
   * - Plugins
   * - Locales and timezone settings
   * - UI Theme (colors and logo)
   * - Global SEO settings
   * - The content navigation bar
   *
   * When making changes to any of the aforementioned entities in any environment, including
   * the primary environment, **the data in all other environments isn’t affected** and stays
   * the same.
   */
  export interface Environment {
    id: string
    meta: EnvironmentMeta
    type: string
  }

  /**
   * Meta attributes
   */
  export interface EnvironmentMeta {
    /**
     * Date of creation
     */
    created_at: Date
    /**
     * Last data change
     */
    last_data_change_at: Date
    /**
     * Is this environment the primary for the project?
     */
    primary: boolean
    /**
     * Status of the environment
     */
    status: PurpleStatus
  }

  /**
   * Status of the environment
   */
  export enum PurpleStatus {
    Creating = "creating",
    Destroying = "destroying",
    Ready = "ready",
  }

  /**
   * Each Model consists of a set of fields. Using the database metaphore, fields are like
   * table columns, and when creating them you need to specify their type (`string`, `file`,
   * `float`, etc.) and any required validation.
   */
  export interface Field {
    attributes: FieldAttributes
    id: string
    relationships: FieldRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface FieldAttributes {
    /**
     * Field API key
     */
    api_key: string
    /**
     * Field appearance details, plugin configuration and field add-ons
     */
    appearance: Appearance
    /**
     * Field appearance
     */
    appeareance: Appeareance
    /**
     * Default value for Field. When field is localized accepts an object of default values with
     * site locales as keys
     */
    default_value: boolean | number | { [key: string]: any } | null | string
    /**
     * Type of input
     */
    field_type: string
    /**
     * Field hint
     */
    hint: null | string
    /**
     * The label of the field
     */
    label: string
    /**
     * Whether the field needs to be multilanguage or not
     */
    localized: boolean
    /**
     * Ordering index
     */
    position: number
    /**
     * Optional field validations
     */
    validators: { [key: string]: any }
  }

  /**
   * Field appearance details, plugin configuration and field add-ons
   */
  export interface Appearance {
    /**
     * An array of add-on plugins with id and parameters
     */
    addons?: Addon[]
    /**
     * This can be either the field editor type or a plugin id
     */
    editor: string
    /**
     * The editor plugin's parameters
     */
    parameters: { [key: string]: any }
  }

  export interface Addon {
    id?: string
    parameters?: { [key: string]: any }
  }

  /**
   * Field appearance
   */
  export interface Appeareance {
    editor: string
    parameters: { [key: string]: any }
  }

  /**
   * JSON API links
   */
  export interface FieldRelationships {
    /**
     * Fieldset linkage
     */
    fieldset: Fieldset
    /**
     * Field item type
     */
    item_type: PurpleItemType
  }

  /**
   * Fieldset linkage
   */
  export interface Fieldset {
    data: FieldsetData | null
  }

  /**
   * JSON API data
   */
  export interface FieldsetData {
    id: string
    type: string
  }

  /**
   * Field item type
   */
  export interface PurpleItemType {
    data: ActiveItemTypeData
  }

  /**
   * Fields can be organized and grouped into fieldset to better present them to editors.
   */
  export interface CoordinateFieldset {
    attributes: FieldsetAttributes
    id: string
    relationships: FieldsetRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface FieldsetAttributes {
    /**
     * Whether the fieldset can be collapsed or not
     */
    collapsible: boolean
    /**
     * Description/contextual hint for the fieldset
     */
    hint: null | string
    /**
     * Ordering index
     */
    position: number
    /**
     * When fieldset is collapsible, determines if the default is to start collapsed or not
     */
    start_collapsed: boolean
    /**
     * The title of the fieldset
     */
    title: string
  }

  /**
   * JSON API links
   */
  export interface FieldsetRelationships {
    /**
     * Fieldset item type
     */
    item_type: FluffyItemType
  }

  /**
   * Fieldset item type
   */
  export interface FluffyItemType {
    data: ActiveItemTypeData
  }

  /**
   * DatoCMS stores the individual pieces of content you create from a model as records, which
   * are much like table rows in a database. For backward-compatibility reasons, the API
   * refers to records as "items".
   */
  export interface Record {
    attributes: { [key: string]: any }
    id: string
    meta: ItemMeta
    relationships: ItemRelationships
    type: string
  }

  /**
   * Meta information regarding the record
   */
  export interface ItemMeta {
    /**
     * Date of creation
     */
    created_at: Date
    /**
     * The ID of the current record version
     */
    current_version: string
    /**
     * Date of first publication
     */
    first_published_at: Date | null
    /**
     * Whether the current record is valid or not
     */
    is_valid: boolean
    /**
     * Date of future publication
     */
    publication_scheduled_at: Date | null
    /**
     * Date of last publication
     */
    published_at: Date | null
    /**
     * Status
     */
    status: FluffyStatus
    /**
     * Date of future unpublishing
     */
    unpublishing_scheduled_at: Date | null
    /**
     * Last update time
     */
    updated_at: Date
  }

  /**
   * Status
   */
  export enum FluffyStatus {
    Draft = "draft",
    Published = "published",
    Updated = "updated",
  }

  /**
   * JSON API links
   */
  export interface ItemRelationships {
    /**
     * The entity (account/collaborator/access token) who created the record. It must be an
     * object with `type` (e.g. 'account') and `id` properties.
     */
    creator: PurpleCreator
    /**
     * The record's model
     */
    item_type: TentacledItemType
  }

  /**
   * The entity (account/collaborator/access token) who created the record. It must be an
   * object with `type` (e.g. 'account') and `id` properties.
   */
  export interface PurpleCreator {
    data: CreatorData
  }

  /**
   * JSON API data
   */
  export interface CreatorData {
    id: string
    type: string
  }

  /**
   * The record's model
   */
  export interface TentacledItemType {
    data: ActiveItemTypeData
  }

  /**
   * The way you define the kind of content you can edit inside your administrative area
   * passes through the concept of Models, which are much like database tables. For
   * backward-compatibility reasons, the API refers to models as "item types".
   */
  export interface ModelBlock {
    attributes: ItemTypeAttributes
    id: string
    relationships: ItemTypeRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface ItemTypeAttributes {
    /**
     * Whether we require all the project locales to be present for each localized field or not
     */
    all_locales_required: boolean
    /**
     * API key of the model
     */
    api_key: string
    /**
     * The way the model collection should be presented to the editors
     */
    collection_appearance: CollectionAppearance
    /**
     * The way the model collection should be presented to the editors
     */
    collection_appeareance: CollectionAppearance
    /**
     * Whether draft/published mode is active or not
     */
    draft_mode_active: boolean
    /**
     * If this model is single-instance, this tells the single-instance record has already been
     * created or not
     */
    has_singleton_item: boolean
    /**
     * A hint shown to editors to help them understand the purpose of this model/block
     */
    hint: null | string
    /**
     * Whether this model is a modular content block or not
     */
    modular_block: boolean
    /**
     * Name of the model
     */
    name: string
    /**
     * If an ordering field is set, this fields specify the sorting direction
     */
    ordering_direction: OrderingDirection | null
    /**
     * Whether the model is single-instance or not
     */
    singleton: boolean
    /**
     * Whether editors can sort records via drag & drop or not
     */
    sortable: boolean
    /**
     * Whether editors can organize records in a tree or not
     */
    tree: boolean
  }

  /**
   * The way the model collection should be presented to the editors
   */
  export enum CollectionAppearance {
    Compact = "compact",
    Table = "table",
  }

  export enum OrderingDirection {
    Asc = "asc",
    Desc = "desc",
  }

  /**
   * JSON API links
   */
  export interface ItemTypeRelationships {
    /**
     * The list of item type fields
     */
    fields: Fields
    /**
     * The field upon which the collection is sorted
     */
    ordering_field: OrderingField
    /**
     * The item instance related to this item type
     */
    singleton_item: SingletonItem
    /**
     * The field to use as display title
     */
    title_field: TitleField
  }

  /**
   * The list of item type fields
   */
  export interface Fields {
    data: FieldsData[]
  }

  /**
   * JSON API data
   */
  export interface FieldsData {
    id: string
    type: string
  }

  /**
   * The field upon which the collection is sorted
   */
  export interface OrderingField {
    data: FieldsData | null
  }

  /**
   * The item instance related to this item type
   */
  export interface SingletonItem {
    data: ActiveItemData | null
  }

  /**
   * The field to use as display title
   */
  export interface TitleField {
    data: FieldsData | null
  }

  /**
   * In DatoCMS you can create filters to help you (and other editors) quickly search for
   * records
   */
  export interface ModelFilter {
    attributes: ItemTypeFilterAttributes
    id: string
    relationships: ItemTypeFilterRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface ItemTypeFilterAttributes {
    /**
     * The actual filter
     */
    filter: { [key: string]: any }
    /**
     * The name of the filter
     */
    name: string
    /**
     * Whether it's a shared filter or not
     */
    shared: boolean
  }

  /**
   * JSON API links
   */
  export interface ItemTypeFilterRelationships {
    /**
     * Model associated with the filter
     */
    item_type: StickyItemType
  }

  /**
   * Model associated with the filter
   */
  export interface StickyItemType {
    data: ActiveItemTypeData
  }

  export interface RecordVersion {
    attributes: { [key: string]: any }
    id: string
    relationships: ItemVersionRelationships
    type: string
  }

  /**
   * JSON API links
   */
  export interface ItemVersionRelationships {
    /**
     * Editor
     */
    editor: FluffyEditor
    /**
     * The records' version
     */
    item: PurpleItem
  }

  /**
   * Editor
   */
  export interface FluffyEditor {
    data: CreatorData
  }

  /**
   * The records' version
   */
  export interface PurpleItem {
    data: ActiveItemData
  }

  export interface AsyncronousJob {
    id: string
    type: string
  }

  /**
   * Some API endpoint give results asyncronously, returning the ID of a job
   */
  export interface JobResult {
    attributes: JobResultAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface JobResultAttributes {
    /**
     * JSON API response of the HTTP request
     */
    payload: { [key: string]: any } | null
    /**
     * Status of delayed HTTP response
     */
    status: number
  }

  export interface MaintenanceMode {
    attributes: MaintenanceModeAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface MaintenanceModeAttributes {
    /**
     * Whether maintenance mode is currently active or not
     */
    active: boolean
  }

  /**
   * In DatoCMS you can organize the different Models present in your administrative area
   * reordering and grouping them, so that their purpose will be more clear to the final
   * editor.
   */
  export interface MenuItem {
    attributes: MenuItemAttributes
    id: string
    relationships: MenuItemRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface MenuItemAttributes {
    /**
     * The URL to which the menu item points to
     */
    external_url: null | string
    /**
     * The label of the menu item
     */
    label: string
    /**
     * Opens link in new tab (used together with `external_url`)
     */
    open_in_new_tab: boolean
    /**
     * Ordering index
     */
    position: number
  }

  /**
   * JSON API links
   */
  export interface MenuItemRelationships {
    /**
     * Underlying menu items
     */
    children: Children
    /**
     * item type associated with the menu item
     */
    item_type: IndigoItemType
    /**
     * Parent menu item
     */
    parent: Parent
  }

  /**
   * Underlying menu items
   */
  export interface Children {
    data: ChildrenData[]
  }

  /**
   * JSON API data
   */
  export interface ChildrenData {
    id: string
    type: string
  }

  /**
   * item type associated with the menu item
   */
  export interface IndigoItemType {
    data: ActiveItemTypeData | null
  }

  /**
   * Parent menu item
   */
  export interface Parent {
    data: ChildrenData | null
  }

  /**
   * Plugins enable developers to replace DatoCMS field components with HTML5 applications so
   * the editing experiences of the DatoCMS web app can be customized.
   */
  export interface Plugin {
    attributes: PluginAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface PluginAttributes {
    /**
     * A textual description for the plugin
     */
    description: null | string
    /**
     * On which types of field this plugin can be used
     */
    field_types: FieldType[]
    /**
     * The name of the plugin
     */
    name: string
    /**
     * Plugin Npm package name
     */
    package_name: null | string
    /**
     * Plugin Npm version
     */
    package_version: null | string
    /**
     * Parameter definitions for the plugin
     */
    parameter_definitions: ParameterDefinitions
    /**
     * Global parameters which are set on on a project level. Values apply globally to every
     * instance of an plugin within the project.
     */
    parameters: { [key: string]: any }
    /**
     * The type of extension
     */
    plugin_type: PluginType
    /**
     * The name of the plugin
     */
    url: string
  }

  export enum FieldType {
    Boolean = "boolean",
    Color = "color",
    Date = "date",
    DateTime = "date_time",
    File = "file",
    Float = "float",
    Gallery = "gallery",
    Integer = "integer",
    Json = "json",
    LatLon = "lat_lon",
    Link = "link",
    Links = "links",
    RichText = "rich_text",
    Seo = "seo",
    Slug = "slug",
    String = "string",
    Text = "text",
    Video = "video",
  }

  /**
   * Parameter definitions for the plugin
   */
  export interface ParameterDefinitions {
    global: any[]
    instance: any[]
  }

  /**
   * The type of extension
   */
  export enum PluginType {
    FieldAddon = "field_addon",
    FieldEditor = "field_editor",
    Sidebar = "sidebar",
  }

  /**
   * Info that can be accessed by unauthorized users
   */
  export interface PublicInfoClass {
    attributes: PublicInfoAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface PublicInfoAttributes {
    /**
     * Template URL to download specific I18n messages (for white-label projects only)
     */
    custom_i18n_messages_template_url: null | string
    /**
     * Specifies the logo url if present
     */
    logo_url: null | string
    /**
     * Site name
     */
    name: string
    /**
     * Specifies the Single Sign-on URL to reach
     */
    sso_saml_init_url: null | string
    /**
     * Specifies the color-scheme for the project
     */
    theme: PurpleTheme
    /**
     * Specifies whether the project is in white-label mode
     */
    white_label: boolean
  }

  /**
   * Specifies the color-scheme for the project
   */
  export interface PurpleTheme {
    accent_color?: AccentColor
    dark_color?: AccentColor
    light_color?: AccentColor
    primary_color?: PrimaryColor
  }

  export interface AccentColor {
    alpha: number
    blue: number
    green: number
    red: number
  }

  export interface PrimaryColor {
    alpha: number
    blue: number
    green: number
    red: number
  }

  /**
   * A Role represents a specific set of actions an editor (or an API token) can perform on
   * your administrative area.
   */
  export interface Role {
    attributes: RoleAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface RoleAttributes {
    /**
     * Can change locales, timezone and UI theme
     */
    can_edit_environment: boolean
    /**
     * Can edit favicon, global SEO settings and no-index policy
     */
    can_edit_favicon: boolean
    /**
     * Can create/edit models, plugins and customize content navigation bar
     */
    can_edit_schema: boolean
    /**
     * Can change project name and 2FA settings
     */
    can_edit_site: boolean
    /**
     * Can manage API tokens
     */
    can_manage_access_tokens: boolean
    /**
     * Can create/edit Build triggers
     */
    can_manage_build_triggers: boolean
    /**
     * Can create/delete sandbox environments and promote them to primary environment
     */
    can_manage_environments: boolean
    /**
     * Can create/edit shared filters (both for models and the media area)
     */
    can_manage_shared_filters?: boolean
    /**
     * Can manage Single Sign-On settings
     */
    can_manage_sso: boolean
    /**
     * Can create/edit roles and invite/remove collaborators
     */
    can_manage_users: boolean
    /**
     * Can create/edit webhooks
     */
    can_manage_webhooks: boolean
    /**
     * Can perform Site Search API calls
     */
    can_perform_site_search: boolean
    /**
     * Can promote environments to primary and manage maintenance mode
     */
    can_promote_environments: boolean
    /**
     * Specifies the environments the user can access
     */
    environments_access: EnvironmentsAccess
    /**
     * The name of the role
     */
    name: string
    /**
     * Prohibited build triggers for a role
     */
    negative_build_trigger_permissions: NegativeBuildTriggerPermission[]
    /**
     * Prohibited actions on a model (or all) for a role
     */
    negative_item_type_permissions: NegativeItemTypePermission[]
    /**
     * Prohibited actions on a model (or all) for a role
     */
    negative_upload_permissions: NegativeUploadPermission[]
    /**
     * Allowed build triggers for a role
     */
    positive_build_trigger_permissions: PositiveBuildTriggerPermission[]
    /**
     * Allowed actions on a model (or all) for a role
     */
    positive_item_type_permissions: PositiveItemTypePermission[]
    /**
     * Allowed actions on a model (or all) for a role
     */
    positive_upload_permissions: PositiveUploadPermission[]
  }

  /**
   * Specifies the environments the user can access
   */
  export enum EnvironmentsAccess {
    All = "all",
    PrimaryOnly = "primary_only",
    SandboxOnly = "sandbox_only",
  }

  export interface NegativeBuildTriggerPermission {
    build_trigger: null | string
  }

  export interface NegativeItemTypePermission {
    /**
     * Permitted action
     */
    action: NegativeItemTypePermissionAction
    environment: string
    item_type: null | string
    /**
     * Permitted creator
     */
    on_creator: OnCreator | null
  }

  /**
   * Permitted action
   */
  export enum NegativeItemTypePermissionAction {
    All = "all",
    Create = "create",
    Delete = "delete",
    EditCreator = "edit_creator",
    Publish = "publish",
    Read = "read",
    TakeOver = "take_over",
    Update = "update",
  }

  export enum OnCreator {
    Anyone = "anyone",
    Role = "role",
    Self = "self",
  }

  export interface NegativeUploadPermission {
    /**
     * Permitted action
     */
    action: NegativeUploadPermissionAction
    environment: string
    /**
     * Permitted creator
     */
    on_creator: OnCreator | null
  }

  /**
   * Permitted action
   */
  export enum NegativeUploadPermissionAction {
    All = "all",
    Create = "create",
    Delete = "delete",
    EditCreator = "edit_creator",
    Read = "read",
    Update = "update",
  }

  export interface PositiveBuildTriggerPermission {
    build_trigger: null | string
  }

  export interface PositiveItemTypePermission {
    /**
     * Permitted action
     */
    action: NegativeItemTypePermissionAction
    environment: string
    item_type: null | string
    /**
     * Permitted creator
     */
    on_creator: OnCreator | null
  }

  export interface PositiveUploadPermission {
    /**
     * Permitted action
     */
    action: NegativeUploadPermissionAction
    environment: string
    /**
     * Permitted creator
     */
    on_creator: OnCreator | null
  }

  /**
   * You can create scheduled publication to publish records in the future
   */
  export interface ScheduledPublication {
    attributes: ScheduledPublicationAttributes
    id: string
    relationships: ScheduledPublicationRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface ScheduledPublicationAttributes {
    /**
     * The future date for the publication
     */
    publication_scheduled_at: Date | null
  }

  /**
   * JSON API links
   */
  export interface ScheduledPublicationRelationships {
    /**
     * Item
     */
    item: FluffyItem
  }

  /**
   * Item
   */
  export interface FluffyItem {
    data: ActiveItemData
  }

  /**
   * You can create a scheduled unpublishing to unpublish records in the future
   */
  export interface ScheduledUnpublishing {
    attributes: ScheduledUnpublishingAttributes
    id: string
    relationships: ScheduledUnpublishingRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface ScheduledUnpublishingAttributes {
    /**
     * The future date for the unpublishing
     */
    unpublishing_scheduled_at: Date | null
  }

  /**
   * JSON API links
   */
  export interface ScheduledUnpublishingRelationships {
    /**
     * Item
     */
    item: TentacledItem
  }

  /**
   * Item
   */
  export interface TentacledItem {
    data: ActiveItemData
  }

  /**
   * DatoCMS Site Search is a way to deliver tailored search results to your site visitors.
   * This is the endpoint you can use to query for results.
   */
  export interface SearchResult {
    attributes: SearchResultAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface SearchResultAttributes {
    /**
     * First lines of body
     */
    body_excerpt: string
    highlight: Highlight
    /**
     * Score
     */
    score: number
    /**
     * Page title
     */
    title: string
    /**
     * URL
     */
    url: string
  }

  export interface Highlight {
    body?: string[] | null
    title?: string[] | null
  }

  /**
   * A session is required to access to read-and-write API endpoints
   */
  export interface Session {
    id: string
    relationships: SessionRelationships
    type: string
  }

  /**
   * JSON API links
   */
  export interface SessionRelationships {
    /**
     * The user associated with the session
     */
    user: User
  }

  /**
   * The user associated with the session
   */
  export interface User {
    data: UserData
  }

  /**
   * JSON API data
   */
  export interface UserData {
    id: string
    type: string
  }

  /**
   * A site represents a specific DatoCMS administrative area
   */
  export interface Site {
    attributes: SiteAttributes
    id: string
    relationships: SiteRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface SiteAttributes {
    /**
     * Administrative area custom domain
     */
    domain: null | string
    /**
     * The upload id for the favicon
     */
    favicon: null | string
    /**
     * Frontend website url
     */
    frontend_url: null | string
    /**
     * Specifies default global settings
     */
    global_seo: null | Globalseo
    /**
     * Google API Key to be used by the LatLon widget
     */
    google_maps_api_token: null | string
    /**
     * Imgix host
     */
    imgix_host: null | string
    /**
     * DatoCMS internal domain for the administrative area
     */
    internal_domain: null | string
    /**
     * Number of items present in the site
     */
    items_count: number
    /**
     * Specifies the last time when a change of data occurred
     */
    last_data_change_at: Date | null
    /**
     * Available locales
     */
    locales: string[]
    /**
     * Site name
     */
    name: string
    /**
     * Whether the website needs to be indexed by search engines or not
     */
    no_index: boolean
    /**
     * Specifies whether all users of this site need to authenticate using two-factor
     * authentication
     */
    require_2fa: boolean
    /**
     * Specifies the theme to use in administrative area
     */
    theme: FluffyTheme
    /**
     * Site default timezone
     */
    timezone: string
  }

  export interface Globalseo {
    /**
     * URL of facebook page
     */
    facebook_page_url?: null | string
    fallback_seo?: Fallbackseo
    /**
     * Site name, used in social sharing
     */
    site_name?: string
    /**
     * Title meta tag suffix
     */
    title_suffix?: null | string
    /**
     * Twitter account associated to website
     */
    twitter_account?: null | string
  }

  export interface Fallbackseo {
    description: string
    /**
     * The id of the image
     */
    image: null | string
    title: string
    /**
     * Determines how a Twitter link preview is shown
     */
    twitter_card?: TwitterCard
  }

  /**
   * Determines how a Twitter link preview is shown
   */
  export enum TwitterCard {
    Summary = "summary",
    SummaryLargeImage = "summary_large_image",
  }

  /**
   * Specifies the theme to use in administrative area
   */
  export interface FluffyTheme {
    accent_color: AccentColor
    dark_color: AccentColor
    light_color: AccentColor
    /**
     * The site logo
     */
    logo: null | string
    primary_color: AccentColor
  }

  /**
   * JSON API links
   */
  export interface SiteRelationships {
    account: RelationshipsAccount
    build_triggers?: RelationshipsBuildTriggers
    item_types: RelationshipsItemTypes
    menu_items: MenuItems
    roles: RelationshipsRoles
    sso_default_role?: SsoDefaultRole
    sso_users: SsoUsers
    users: PurpleUsers
  }

  export interface RelationshipsAccount {
    data: AccountData
  }

  /**
   * JSON API data
   */
  export interface AccountData {
    id: string
    type: string
  }

  export interface RelationshipsBuildTriggers {
    /**
     * The list of build trigger
     */
    data: BuildTriggerData[]
  }

  export interface RelationshipsItemTypes {
    /**
     * The list of site item types
     */
    data: ActiveItemTypeData[]
  }

  export interface MenuItems {
    /**
     * The list of site menu items
     */
    data: ChildrenData[]
  }

  export interface RelationshipsRoles {
    /**
     * The list of site roles
     */
    data: RoleData[]
  }

  export interface SsoDefaultRole {
    /**
     * Specifies the default role for newly created identity providers users
     */
    data: RoleData[]
  }

  export interface SsoUsers {
    /**
     * The list of site SSO users
     */
    data: SsoUsersDatum[]
  }

  /**
   * JSON API data
   */
  export interface SsoUsersDatum {
    id: string
    type: string
  }

  export interface PurpleUsers {
    /**
     * The list of site users
     */
    data: UserData[]
  }

  /**
   * A DatoCMS administrative area can be accessed by multiple people. Every invitation is
   * linked to a specific Role, which describes what actions it will be able to perform once
   * the user will register.
   */
  export interface Invitation {
    attributes: SiteInvitationAttributes
    id: string
    relationships: SiteInvitationRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface SiteInvitationAttributes {
    /**
     * Email
     */
    email: string
  }

  /**
   * JSON API links
   */
  export interface SiteInvitationRelationships {
    /**
     * Role
     */
    role: FluffyRole
  }

  /**
   * Role
   */
  export interface FluffyRole {
    data: RoleData
  }

  /**
   * Stores the information regarding the current plan for the project.
   */
  export interface Plan {
    attributes: SitePlanAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface SitePlanAttributes {
    /**
     * The number of different API tokens you can generate, each which different permissions
     */
    access_tokens: number | null
    /**
     * Whether this plan is active or legacy
     */
    active: boolean
    /**
     * Whether built-in image editor and smart-tagging is enabled or not
     */
    advanced_media_area: boolean
    /**
     * The number of requests made to both our Content Management and Content Delivery APIs
     */
    api_calls: number | null
    /**
     * Automatic packets
     */
    auto_packets: AutoPackets
    /**
     * Number of build triggers
     */
    build_triggers: number | null
    /**
     * Whether custom domain can be enabled or not
     */
    custom_domain: boolean
    /**
     * Available extra packets
     */
    extra_packets: ExtraPackets
    /**
     * Days of version history retention
     */
    history_retention_days: number | null
    /**
     * Number of indexable pages
     */
    indexable_pages: number | null
    /**
     * Whether collaboration features are enabled or not
     */
    item_locking: boolean
    /**
     * Number of models allowed
     */
    item_types: number | null
    /**
     * Number of records allowed
     */
    items: number | null
    /**
     * Number of locales allowed
     */
    locales: number | null
    /**
     * Monthly price
     */
    monthly_price: number
    /**
     * The number of available encoding seconds to Mux.com
     */
    mux_encoding_seconds: number | null
    /**
     * The number of streaming seconds delivered by Mux.com
     */
    mux_streaming_seconds: number | null
    /**
     * The name of the plan
     */
    name: string
    /**
     * Whether two-factor authentication can be enabled or not
     */
    otp: boolean
    /**
     * Number of plugins
     */
    plugins: number | null
    /**
     * Number of roles allowed
     */
    roles: number | null
    /**
     * Number of sandbox environments allowed
     */
    sandbox_environments: number | null
    /**
     * Whether Single Sign-On feature is enabled or not
     */
    sso: boolean
    /**
     * Amount of asset data transferred between our Asset CDN and GraphQL Content Delivery API
     * and content consumers
     */
    traffic_bytes: number | null
    /**
     * Uploadable bytes
     */
    uploadable_bytes: number | null
    /**
     * Number of users that can be invited
     */
    users: number | null
    /**
     * Whether video streaming with Mux.com is enabled or not
     */
    video: boolean
    /**
     * Whether project is in white-label mode or not
     */
    white_label: boolean
    /**
     * Yearly price
     */
    yearly_price: number
  }

  /**
   * Automatic packets
   */
  export interface AutoPackets {
    api_calls?: ApiCalls
    mux_streaming_seconds?: MuxStreamingSeconds
    traffic_bytes?: TrafficBytes
  }

  export interface ApiCalls {
    amount_per_packet: number
    price: number
  }

  export interface MuxStreamingSeconds {
    amount_per_packet: number
    price: number
  }

  export interface TrafficBytes {
    amount_per_packet: number
    price: number
  }

  /**
   * Available extra packets
   */
  export interface ExtraPackets {
    access_tokens?: AccessTokens
    build_triggers?: ExtraPacketsBuildTriggers
    item_types?: ExtraPacketsItemTypes
    locales?: Locales
    mux_encoding_seconds?: MuxEncodingSeconds
    roles?: ExtraPacketsRoles
    sandbox_environments?: SandboxEnvironments
    users?: ExtraPacketsUsers
  }

  export interface AccessTokens {
    amount_per_packet: number
    price: number
  }

  export interface ExtraPacketsBuildTriggers {
    amount_per_packet: number
    price: number
  }

  export interface ExtraPacketsItemTypes {
    amount_per_packet: number
    price: number
  }

  export interface Locales {
    amount_per_packet: number
    price: number
  }

  export interface MuxEncodingSeconds {
    amount_per_packet: number
    price: number
  }

  export interface ExtraPacketsRoles {
    amount_per_packet: number
    price: number
  }

  export interface SandboxEnvironments {
    amount_per_packet: number
    price: number
  }

  export interface ExtraPacketsUsers {
    amount_per_packet: number
    price: number
  }

  /**
   * A Single Sign-On group exists when a DatoCMS project is connected to an Identity
   * Provider. These groups can be used to link DatoCMS roles to the Identity Provider's
   * groups.
   */
  export interface SSOGroup {
    attributes: SsoGroupAttributes
    id: string
    relationships: SsoGroupRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface SsoGroupAttributes {
    /**
     * Name of the group
     */
    name: string
    /**
     * When an user belongs to multiple groups, the role associated to the group with the
     * highest priority will be used
     */
    priority: number
  }

  /**
   * JSON API links
   */
  export interface SsoGroupRelationships {
    /**
     * Sso Group's role
     */
    role: TentacledRole
    /**
     * Group members
     */
    users: FluffyUsers
  }

  /**
   * Sso Group's role
   */
  export interface TentacledRole {
    data: RoleData
  }

  /**
   * Group members
   */
  export interface FluffyUsers {
    data: SsoUsersDatum[]
  }

  /**
   * Represents the Single Sign-on settings of the current DatoCMS project
   */
  export interface SSOSettings {
    attributes: SsoSettingsAttributes
    id: string
    relationships: SsoSettingsRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface SsoSettingsAttributes {
    /**
     * URL of Identity Provider SAML Metadata endpoint
     */
    idp_saml_metadata_url: null | string
    /**
     * DatoCMS SAML ACS URL
     */
    saml_acs_url: string
    /**
     * DatoCMS SAML Token
     */
    saml_token: string
    /**
     * DatoCMS SCIM API Token
     */
    scim_api_token?: string
    /**
     * DatoCMS SCIM base URL
     */
    scim_base_url: string
    /**
     * DatoCMS SAML Base URL
     */
    sp_saml_base_url: string
    /**
     * DatoCMS SAML Metadata URL
     */
    sp_saml_metadata_url: string
  }

  /**
   * JSON API links
   */
  export interface SsoSettingsRelationships {
    /**
     * The default role assigned to SSO users that do not belong to any SSO group
     */
    default_role: DefaultRole
  }

  /**
   * The default role assigned to SSO users that do not belong to any SSO group
   */
  export interface DefaultRole {
    data: RoleData | null
  }

  /**
   * A Single Sign-On user exists when a DatoCMS project is connected to an external Identity
   * Provider. An SSO user will not use the standard login procedure but has to go through
   * SAML authentication. It can also be linked to one or more IdP groups.
   */
  export interface SSOUser {
    attributes: SsoUserAttributes
    id: string
    relationships: SsoUserRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface SsoUserAttributes {
    /**
     * Identity provider ID
     */
    external_id: null | string
    /**
     * First name
     */
    first_name: null | string
    /**
     * Whether this user is active on the identity provider. De-activated users won't be able to
     * login.
     */
    is_active: boolean
    /**
     * Last name
     */
    last_name: null | string
    /**
     * Email
     */
    username: string
  }

  /**
   * JSON API links
   */
  export interface SsoUserRelationships {
    /**
     * All the users's groups
     */
    groups: Groups
    /**
     * The user role
     */
    role: StickyRole
  }

  /**
   * All the users's groups
   */
  export interface Groups {
    data: GroupsDatum[]
  }

  /**
   * JSON API data
   */
  export interface GroupsDatum {
    id: string
    type: string
  }

  /**
   * The user role
   */
  export interface StickyRole {
    data: RoleData | null
  }

  export interface SubscriptionFeature {
    attributes: SubscriptionFeatureAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface SubscriptionFeatureAttributes {
    /**
     * The codename for the feature
     */
    code: string
    /**
     * Whether the feature is available on the current project
     */
    enabled: boolean
    /**
     * Whether the project is currently using the feature
     */
    in_use?: boolean
  }

  export interface SubscriptionLimit {
    attributes: SubscriptionLimitAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface SubscriptionLimitAttributes {
    /**
     * The codename for the limit
     */
    code: string
    /**
     * The actual limit
     */
    limit: number | null
    /**
     * Current usage
     */
    usage: number
  }

  /**
   * Every file you upload to DatoCMS will be retrievable from this endpoint.
   */
  export interface Upload {
    attributes: UploadAttributes
    id: string
    relationships: UploadRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface UploadAttributes {
    /**
     * Author
     */
    author: null | string
    /**
     * Upload basename
     */
    basename: string
    /**
     * Blurhash for the asset
     */
    blurhash: null | string
    /**
     * Dominant colors of the image
     */
    colors: Color[]
    /**
     * Copyright
     */
    copyright: null | string
    /**
     * Date of upload
     */
    created_at: Date | null
    /**
     * For each of the project's locales, the default metadata to apply if nothing is specified
     * at record's level.
     */
    default_field_metadata: { [key: string]: any }
    /**
     * Seconds of duration for the video
     */
    duration: number | null
    /**
     * Exif information
     */
    exif_info: { [key: string]: any }
    /**
     * Upload filename
     */
    filename: string
    /**
     * Format
     */
    format: null | string
    /**
     * Frame rate (FPS) for the video
     */
    frame_rate: number | null
    /**
     * Height of image
     */
    height: number | null
    /**
     * Is this upload an image?
     */
    is_image: boolean
    /**
     * Mime type of upload
     */
    mime_type: null | string
    /**
     * Maximum quality of MP4 rendition available
     */
    mux_mp4_highest_res: MuxMp4HighestRes | null
    /**
     * Public Mux playback ID. Used with stream.mux.com to create the source URL for a video
     * player.
     */
    mux_playback_id: null | string
    /**
     * Notes
     */
    notes: null | string
    /**
     * Upload path
     */
    path: string
    /**
     * size of the upload
     */
    size: number
    /**
     * Smart tags
     */
    smart_tags: string[]
    /**
     * Tags
     */
    tags: string[]
    /**
     * Date of last update
     */
    updated_at: Date | null
    /**
     * Upload URL
     */
    url: string
    /**
     * Width of image
     */
    width: number | null
  }

  export interface Color {
    /**
     * Alpha value (from 0 to 255)
     */
    alpha: number
    /**
     * Blue value (from 0 to 255)
     */
    blue: number
    /**
     * Green value (from 0 to 255)
     */
    green: number
    /**
     * Red value (from 0 to 255)
     */
    red: number
  }

  export enum MuxMp4HighestRes {
    High = "high",
    Low = "low",
    Medium = "medium",
  }

  /**
   * JSON API links
   */
  export interface UploadRelationships {
    /**
     * The entity (account/collaborator/access token) who created the asset. It must be an
     * object with `type` (e.g. 'account') and `id` properties.
     */
    creator: FluffyCreator
  }

  /**
   * The entity (account/collaborator/access token) who created the asset. It must be an
   * object with `type` (e.g. 'account') and `id` properties.
   */
  export interface FluffyCreator {
    data: CreatorData
  }

  /**
   * In DatoCMS you can create filters to help you (and other editors) quickly search for
   * uploads
   */
  export interface UploadsFilter {
    attributes: UploadFilterAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface UploadFilterAttributes {
    /**
     * The actual filter
     */
    filter: { [key: string]: any }
    /**
     * The name of the filter
     */
    name: string
    /**
     * Whether it's a shared filter or not
     */
    shared: boolean
  }

  /**
   * To upload a file in DatoCMS, first you need to obtain an upload permission through this
   * API endpoint. The response will contain the S3 URL where you will be able to upload the
   * file with a direct PUT request.
   */
  export interface UploadPermission {
    attributes: AttributesObject
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface AttributesObject {
    /**
     * The URL to use to upload the file with a direct PUT request
     */
    url: string
  }

  /**
   * All the site's upload automatically generated tags
   */
  export interface SmartTags {
    attributes: UploadSmartTagAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface UploadSmartTagAttributes {
    /**
     * The tag name
     */
    name: string
  }

  /**
   * All the project's upload tags
   */
  export interface ManualTags {
    attributes: UploadTagAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface UploadTagAttributes {
    /**
     * The tag name
     */
    name: string
  }

  /**
   * You can use counters to analyze your project's data consumption over a period of time.
   * Counters are especially useful if your project is exceeding its API calls/traffic quota
   * limits, to better understand where and how requests are originating. Counters are updated
   * every minute, so you can debug in real-time the results of your changes.
   */
  export interface UsageCounters {
    attributes: UsageCounterAttributes
    id: Id
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface UsageCounterAttributes {
    result: Result[]
  }

  export interface Result {
    /**
     * Counter for the specified occurrence
     */
    counter: number
    /**
     * Occurrence
     */
    value: string
  }

  /**
   * Name of the counter
   */
  export enum Id {
    AssetsPathBytes = "assets_path_bytes",
    AssetsReferrerBytes = "assets_referrer_bytes",
    AssetsipBytes = "assets_ip_bytes",
    CdaAccessTokenidBytes = "cda_access_token_id_bytes",
    CdaAccessTokenidRequests = "cda_access_token_id_requests",
    CdaReferrerBytes = "cda_referrer_bytes",
    CdaReferrerRequests = "cda_referrer_requests",
    CdaipBytes = "cda_ip_bytes",
    CdaipRequests = "cda_ip_requests",
    CmaEndpointBytes = "cma_endpoint_bytes",
    CmaEndpointRequests = "cma_endpoint_requests",
    CmaUserBytes = "cma_user_bytes",
    CmaUserRequests = "cma_user_requests",
    CmaipBytes = "cma_ip_bytes",
    CmaipRequests = "cma_ip_requests",
  }

  /**
   * A DatoCMS administrative area can be accessed by multiple people. Every collaborator is
   * linked to a specific Role, which describes what actions it will be able to perform once
   * logged in.
   */
  export interface Collaborator {
    attributes: UserAttributes
    id: string
    relationships: UserRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface UserAttributes {
    /**
     * Email
     */
    email: string
    /**
     * Full name
     */
    full_name: string
    /**
     * Whether 2-factor authentication is active for this account or not
     */
    is_2fa_active: boolean
    /**
     * Whether the user is active or not
     */
    is_active: boolean
  }

  /**
   * JSON API links
   */
  export interface UserRelationships {
    /**
     * Role
     */
    role: IndigoRole
  }

  /**
   * Role
   */
  export interface IndigoRole {
    data: RoleData
  }

  /**
   * A webhook allows to make requests following certain Dato events. It is linked to a Role,
   * which describes what actions can be performed.
   */
  export interface Webhook {
    attributes: WebhookAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface WebhookAttributes {
    /**
     * A custom payload
     */
    custom_payload: null | string
    /**
     * All the events you will be notified for
     */
    events: any[]
    /**
     * Additional headers that will be sent
     */
    headers: { [key: string]: any }
    /**
     * HTTP Basic Authorization password
     */
    http_basic_password: null | string
    /**
     * HTTP Basic Authorization username
     */
    http_basic_user: null | string
    /**
     * Unique name for the webhook
     */
    name: string
    /**
     * The URL to be called
     */
    url: string
  }

  /**
   * Represents a log entry in the webhooks activity list.
   */
  export interface WebhookCall {
    attributes: WebhookCallAttributes
    id: string
    relationships: WebhookCallRelationships
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface WebhookCallAttributes {
    /**
     * The moment the call occurred
     */
    created_at: Date
    /**
     * The subject of webhook triggering
     */
    entity_type: EntityType
    /**
     * The event that triggers the webhook call
     */
    event_type: FluffyEventType
    /**
     * The request's headers
     */
    request_headers: { [key: string]: any }
    /**
     * The body of the request
     */
    request_payload: string
    /**
     * The url that the webhook called
     */
    request_url: string
    /**
     * The response's headers
     */
    response_headers: { [key: string]: any }
    /**
     * The body of the response
     */
    response_payload: null | string
    /**
     * The status of the response
     */
    response_status: number | null
  }

  /**
   * The subject of webhook triggering
   */
  export enum EntityType {
    Item = "item",
    ItemType = "item_type",
    Upload = "upload",
  }

  /**
   * The event that triggers the webhook call
   */
  export enum FluffyEventType {
    Create = "create",
    Delete = "delete",
    Publish = "publish",
    Unpublish = "unpublish",
    Update = "update",
  }

  /**
   * JSON API links
   */
  export interface WebhookCallRelationships {
    /**
     * The webhook which has been called
     */
    webhook: RelationshipsWebhook
  }

  /**
   * The webhook which has been called
   */
  export interface RelationshipsWebhook {
    data: WebhookData
  }

  /**
   * JSON API data
   */
  export interface WebhookData {
    id: string
    type: string
  }

  /**
   * Represents the white-label settings of the current DatoCMS project
   */
  export interface WhiteLabelSettings {
    attributes: WhiteLabelSettingsAttributes
    id: string
    type: string
  }

  /**
   * JSON API attributes
   */
  export interface WhiteLabelSettingsAttributes {
    /**
     * URL of custom I18n messages. The :locale placeholder represents the current DatoCMS UI
     * locale.
     */
    custom_i18n_messages_template_url: null | string
  }
}
