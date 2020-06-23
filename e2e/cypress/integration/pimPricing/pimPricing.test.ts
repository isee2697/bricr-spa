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

    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/prices'));

    cy.contains('Add new price');
  });
  it('allows to enable pricings', () => {
    cy.findByText('Add price').click();

    cy.contains('The property is for...');
    cy.findByText('Sale').click();
    cy.findByText('Rent').click();

    cy.findByText('Set prices').click();

    cy.wait(1000);

    cy.get('.form-section-title').contains('Sale');
    cy.get('.form-section-title').contains('Rent');
  });
  it('allows to hide pricings', () => {
    cy.findByText('Edit price').click();

    cy.contains('The property is for...');
    cy.get('.MuiDialog-paper')
      .findByText('Sale')
      .click();
    cy.get('.MuiDialog-paper')
      .findByText('Rent')
      .click();

    cy.findByText('Set prices').click();

    cy.wait(1000);

    cy.contains('Add new price');
  });
});
