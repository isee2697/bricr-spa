/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Pim Details Costs', () => {
  it('allows to show pim costs', () => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();

    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });

    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/prices/costs'));

    cy.contains('Add new costs');
  });
  it('allows to add costs', () => {
    cy.get('.form-section-add').click();

    cy.findByText('Electricity').click();
    cy.get('input[name="name"]').type('Custom Name');

    cy.findByText('Add Type').click();

    cy.wait(1000);

    cy.contains('Electricity (Custom Name)');
  });
  it('allows to edit costs', () => {
    cy.findByText('Edit mode').click();
    cy.get('.sub-section-header-toggle').click();

    cy.contains('Payments');
    cy.contains('VAT');

    cy.get('input[name="serviceCosts"]').type('10');
    cy.get('input[name="vatTaxedServiceCosts"]').type('12');
    cy.get('input[name="notes"]').type('Some notes');
  });
});
