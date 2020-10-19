export enum AppRoute {
  home = '/',
  pim = '/pim',
  pimDetails = '/pim/:id',
  project = '/project',
  projectDetails = '/projectDetails/:id',
  objectTypeDetails = '/projectDetails/:projectId/objectTypeDetails/:id',
  linkedPropertyDetails = '/projectDetails/:projectId/objectTypeDetails/:objectTypeId/property/:id',
  crm = '/crm',
  crmRelationsDetails = '/crm/relations/:id',
  crmBusinessesDetails = '/crm/businesses/:id',
  sales = '/sales',
  logout = '/logout',
  login = '/auth/login',
  forgotPassword = '/auth/forgot-password',
  resetPassword = '/auth/reset-password/:token',
  settings = '/settings',
  workflow = '/settings/workflow/:id',
  teams = '/settings/teams/:id',
  billing = '/settings/billing',
  users = '/settings/users',
  userDetails = '/settings/users/:id',
  tasks = '/tasks',
  taskDetails = '/tasks/:id',
  calendar = '/calendar',
  register = '/register',
  setup = '/setup',
  propertiesSetup = '/setup/properties',
  notifications = '/notifications',
  dms = '/dms',
}
