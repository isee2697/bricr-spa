export enum AppRoute {
  home = '/',
  pim = '/pim',
  pimDetails = '/pim/:id',
  project = '/project',
  projectDetails = '/projectDetails/:id',
  objectTypeDetails = '/projectDetails/:projectId/objectTypeDetails/:id',
  linkedPropertyDetails = '/projectDetails/:projectId/objectTypeDetails/:objectTypeId/property/:id',
  crm = '/crm',
  sales = '/sales',
  logout = '/logout',
  login = '/auth/login',
  forgotPassword = '/auth/forgot-password',
  resetPassword = '/auth/reset-password/:token',
  settings = '/settings',
  workflow = '/settings/workflow/:id',
  tasks = '/tasks',
  register = '/register',
  setup = '/setup',
  propertiesSetup = '/setup/properties',
}
