/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Add Cadastre', () => {
  beforeEach(() => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();

    cy.wait(2000);
    NavigationMenu.goToPim();
  });

  it('allows to add plot', () => {
    NavigationMenu.goToPimCadastre();
    cy.findByRole('button', { name: 'Add new plot' }).click();
    cy.findByRole('button', { name: 'Yes, I want' }).click();

    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/cadastre/cadastre-id-3'));
    });
  });
});
