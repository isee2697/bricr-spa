/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Users', () => {
  beforeEach(() => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();
  });

  it('allows to add user', () => {});
});
