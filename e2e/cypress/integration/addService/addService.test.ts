/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Add Service', () => {
  beforeEach(() => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();

    NavigationMenu.goToPim();
  });

  it('allows to add meter', () => {
    NavigationMenu.goToPimServices();
    cy.findByRole('button', { name: 'Add new meter' }).click();
    cy.findByText('Water').click();
    cy.findByLabelText('Name of the meter').type('My water meter');
    cy.findByRole('button', { name: 'Add meter' }).click();

    cy.findByText('Water Meters').click();

    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/services/water'));
    });
  });

  it('allows to add reading to just added meter', () => {
    NavigationMenu.goToPimServices();
    cy.findByRole('button', { name: 'Add new meter' }).click();
    cy.findByText('Water').click();
    cy.findByLabelText('Name of the meter').type('My water meter');
    cy.findByRole('button', { name: 'Add meter' }).click();

    cy.findByText('Water Meters').click();

    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/services/water'));
    });
    cy.get('.form-section-add')
      .last()
      .click();

    cy.findByText('Edit mode').click();
    cy.get('.sub-section-header-toggle')
      .first()
      .click();
    cy.findByLabelText('Value').type('12345');
  });

  it('allows to add service', () => {
    NavigationMenu.goToPimServices();

    cy.get('.form-section-add')
      .first()
      .click();

    cy.findByText('Boiler').click();
    cy.findByLabelText('Name of the hot water supply').type('My hot water supply');
    cy.findByRole('button', { name: 'Add type' }).click();
  });

  it('allows to edit service', () => {
    NavigationMenu.goToPimServices();

    cy.findAllByText('Edit mode')
      .first()
      .click();

    cy.get('.sub-section-header-toggle')
      .first()
      .click();
    cy.findAllByLabelText('A few words about services...')
      .first()
      .type('my info');
    cy.findAllByLabelText('Name')
      .first()
      .type('my Name');
  });
});
