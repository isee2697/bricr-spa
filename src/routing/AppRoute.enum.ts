export enum AppRoute {
  home = '/',
  pimNvm = '/pim/nvm',
  pim = '/pim',
  pimDetails = '/pimDetails/:id',
  pimDocumentDetails = '/pimDetails/:id/documents/folders/:kind/:docId',
  project = '/project',
  projectDetails = '/projectDetails/:id',
  objectTypeDetails = '/projectDetails/:projectId/objectTypeDetails/:id',
  linkedPropertyDetails = '/projectDetails/:projectId/objectTypeDetails/:objectTypeId/property/:id',
  crm = '/crm',
  crmRelationsDetails = '/crmRelations/:id',
  crmRelationsDocumentDetails = '/crmRelations/:id/documents/folders/:docId',
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
  livingSituation = '/settings/livingSituation',
  tasks = '/tasks',
  taskDetails = '/tasks/:id',
  calendar = '/calendar',
  newAppointment = '/calendar/:accountId/appointments/new',
  editAppointment = '/calendar/:accountId/appointments/:id/edit',
  calendarAppointments = '/calendar/:accountId/appointments',
  register = '/register',
  setup = '/setup',
  verify = '/auth/verify',
  confirmInvite = '/auth/confirm-invite',
  propertiesSetup = '/setup/properties',
  confirmationSetup = '/setup/confirmation',
  notifications = '/notifications',
  dms = '/dms',
  email = '/email',
  insights = '/insights',
  chartDetail = '/insights/chartDetails/:id',
}
