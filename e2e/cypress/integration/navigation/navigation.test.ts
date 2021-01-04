/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Navigation', () => {
  it('allows to go to pim list', () => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();
    cy.wait(1500);
    NavigationMenu.goToPim();
    cy.findByTestId('menu-item-residential').click();
    cy.contains('Property Information Management');
  });

  it('allows to go to dashboard page', () => {
    NavigationMenu.goToHome();
    cy.contains('Welcome, test');
  });
});
