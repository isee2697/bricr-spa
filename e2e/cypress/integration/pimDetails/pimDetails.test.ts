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

    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'foo/general'));

    cy.contains('Isenburgstraat 36 4813 NC Breda NL');
  });

  it('shows info about error', () => {
    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'test/general'));

    cy.contains('Something went wrong');
  });
});
