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

  goToUsers(): void {
    cy.visit(Cypress.env().baseUrl + AppRoute.users);
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
    cy.visit(Cypress.env().baseUrl + AppRoute.pimDetails.replace('/:id', '') + '/PIM_1/services');
  }

  goToPimBuildings(): void {
    cy.visit(Cypress.env().baseUrl + AppRoute.pimDetails.replace('/:id', '') + '/PIM_4_AOG/buildings');
  }

  goToPimGrounds(): void {
    cy.visit(Cypress.env().baseUrl + AppRoute.pimDetails.replace('/:id', '') + '/PIM_4_AOG/ground');
  }

  goToPimAnimals(): void {
    cy.visit(Cypress.env().baseUrl + AppRoute.pimDetails.replace('/:id', '') + '/PIM_4_AOG/animals');
  }

  goToPimMeters(): void {
    cy.visit(Cypress.env().baseUrl + AppRoute.pimDetails.replace('/:id', '') + '/pim_1/meters');
  }

  goToPimCadastre(): void {
    cy.visit(Cypress.env().baseUrl + AppRoute.pimDetails.replace('/:id', '') + '/pim_1/cadastre');
  }

  get homeLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.home}`;
  }

  get pimLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.pim}`;
  }

  get pimResidentialLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.pim}/residential`;
  }

  get pimDetailsLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.pimDetails}`;
  }

  get projectDetailsLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.projectDetails}`;
  }

  get userDetails(): string {
    return `${Cypress.env().baseUrl}${AppRoute.userDetails}`;
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
