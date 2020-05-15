export enum AppRoute {
  home = '/',
  pim = '/pim',
  pimDetails = '/pim/:id',
  pimDetailsInside = '/pim/:id/inside/:floor',
  crm = '/crm',
  sales = '/sales',
  logout = '/logout',
  login = '/auth/login',
  forgotPassword = '/auth/forgot-password',
  resetPassword = '/auth/reset-password/:token',
}
