export enum AppRoute {
  home = '/',
  pim = '/pim',
  pimDetails = '/pimDetails/:id',
  pimDocumentDetails = '/pimDetails/:id/documents/:kind/:docId',
  project = '/project',
  projectDetails = '/projectDetails/:id',
  objectTypeDetails = '/projectDetails/:projectId/objectTypeDetails/:id',
  linkedPropertyDetails = '/projectDetails/:projectId/objectTypeDetails/:objectTypeId/property/:id',
  crm = '/crm',
  crmRelationsDetails = '/crmRelations/:id',
  crmBusinessesDetails = '/crmBusinesses/:id',
  crmGeneral = '/crm/:id/personal_information_general',
  sales = '/sales',
  salesDetails = '/salesDetails/:type/:id',
  salesInvoiceDetails = '/salesInvoices/:id',
  logout = '/logout',
  login = '/auth/login',
  forgotPassword = '/auth/forgot-password',
  resetPassword = '/auth/reset-password/:token',
  settings = '/settings',
  settingsGeneral = '/settings/general',
  workflow = '/settings/workflow/:id',
  teams = '/settings/teams/:id',
  billing = '/settings/billing',
  users = '/settings/users',
  userDetails = '/settings/users/:id',
  contractTemplates = '/settings/contract_templates_details/:contractTemplateId',
  cadastre = '/settings/cadastre',
  keyboard = '/settings/keyboard',
  signboard = '/settings/signboard',
  tasks = '/tasks',
  taskDetails = '/tasks/:id',
  calendar = '/calendar',
  newAppointment = '/calendar/new',
  editAppointment = '/calendar/:id/edit',
  register = '/register',
  setup = '/setup',
  propertiesSetup = '/setup/properties',
  confirmationSetup = '/setup/confirmation',
  notifications = '/notifications',
  dms = '/dms',
  email = '/email/:inboxId',
}
