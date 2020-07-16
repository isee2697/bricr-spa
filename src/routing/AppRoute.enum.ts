export enum AppRoute {
  home = '/',
  pim = '/pim',
  pimDetails = '/pim/:id',
  project = '/project',
  projectDetails = '/projectDetails/:id',
  objectTypeDetails = '/projectDetails/:projectId/objectTypeDetails/:id',
  crm = '/crm',
  sales = '/sales',
  logout = '/logout',
  login = '/auth/login',
  forgotPassword = '/auth/forgot-password',
  resetPassword = '/auth/reset-password/:token',
}
