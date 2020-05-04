/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Navigation', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it('allows to go to pim list', () => {
    cy.userLogin();
    NavigationMenu.goToPim();
    cy.contains('Property Information Management');
  });

  it('allows to go to dashboard page', () => {
    NavigationMenu.goToHome();
    cy.contains('Welcome, test');
  });
});
