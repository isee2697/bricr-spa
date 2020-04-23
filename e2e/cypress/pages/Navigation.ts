import { AppRoute } from '../../../src/routing/AppRoute.enum';

class Navigation {
  goToLogout(): void {
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

  get homeLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.home}`;
  }

  get loginLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.login}`;
  }

  get logoutLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.logout}`;
  }
}

export const NavigationMenu = new Navigation();
