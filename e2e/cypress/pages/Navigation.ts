import { AppRoute } from '../../../src/routing/AppRoute.enum';

class Navigation {
  goToLogout(): void {
    cy.get('#profile-button').click();
    cy.get(`a[href*="${AppRoute.logout}"]`)
      .first()
      .click();
  }

  goToHome(): void {
    cy.get(`a[href*="${AppRoute.home}"]`)
      .first()
      .click();
  }

  goToLogin(): void {
    cy.get(`a[href*="${AppRoute.login}"]`)
      .first()
      .click();
  }

  goToForgotPassword(): void {
    cy.get(`a[href*="${AppRoute.forgotPassword}"]`)
      .first()
      .click();
  }

  goToResetPasswordPage(): void {
    cy.visit(Cypress.env().baseUrl + AppRoute.resetPassword.replace(':token', 'token'));
  }

  get homeLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.home}`;
  }

  get loginLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.login}`;
  }

  get logoutLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.logout}`;
  }

  get forgotPasswordLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.forgotPassword}`;
  }
}

export const NavigationMenu = new Navigation();
