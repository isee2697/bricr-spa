/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Pim Details Investments', () => {
  it('allows to show investment', () => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();

    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });

    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/prices/investments'));

    cy.contains('Investment');
  });
  it('allows to edit investment', () => {
    cy.findByText('Edit mode').click();

    cy.get('input[name="economicRentalValue"]').type('1000');
    cy.get('input[name="averageMaturity"]').type('1000');
    cy.findByText('Rent indexed').click();
    cy.findByText('Split apartment').click();
    cy.get('input[name="averageVacancyPercentage"]').type('5');
    cy.get('input[name="numberOfRentableUnits"]').type('1');
    cy.get('input[name="amountOfTenants"]').type('1');
    cy.get('input[name="remainingTermContacts"]').type('2');
    cy.get('input[name="vacancySquareMeters"]').type('2');

    cy.wait(3000);
  });
});
