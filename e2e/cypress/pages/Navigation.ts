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

  goToPim(): void {
    cy.get(`a[href*="${AppRoute.pim}"]`)
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

  goToPimServices(): void {
    cy.visit(Cypress.env().baseUrl + AppRoute.pim + '/pim_1/services');
  }

  goToPimCadastre(): void {
    cy.visit(Cypress.env().baseUrl + AppRoute.pim + '/pim_1/cadastre');
  }

  get homeLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.home}`;
  }

  get pimLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.pim}`;
  }

  get pimDetailsLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.pimDetails}`;
  }

  get projectDetailsLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.projectDetails}`;
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
