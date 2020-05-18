/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Pim Details', () => {
  it('allows to show pim details', () => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();

    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });

    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/general'));

    cy.contains('Isenburgstraat 36 4813 NC Breda Netherlands');
  });

  it('shows info about error', () => {
    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'test/general'));

    cy.contains('Something went wrong');
  });
});
