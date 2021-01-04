/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Add Ground', () => {
  beforeEach(() => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();

    cy.wait(2000);
    NavigationMenu.goToPim();
  });

  it('allows to add ground and change it', () => {
    NavigationMenu.goToPimGrounds();
    cy.findByRole('button', { name: 'Add new ground' }).click();
    cy.findByLabelText('Name').type('My grass land');
    cy.findByRole('button', { name: 'Add new ground' }).click();

    cy.contains('My grass land');

    cy.findByLabelText('Name').type(' with some more naming');
    cy.findByText('Grass Land').click();
    cy.findByText('Loam')
      .parent()
      .click();

    cy.findByText('Drainage').click();
    cy.findByPlaceholderText('Extra information about drainage').type('Something about drainage');
    cy.findByText('Production rights').click();
    cy.findByPlaceholderText('Extra information about production rights').type('Something about rights');
    cy.findByText('Flower bulbs')
      .parent()
      .click();
    cy.findByText('Fruit')
      .parent()
      .click();
    cy.findByText('Wood')
      .parent()
      .click();

    cy.findByLabelText('Length').type('55');
    cy.findByLabelText('Width').type('10');
    cy.findByLabelText('Surface')
      .type('1')
      .then(field => {
        expect(field.val()).to.equal('5501');
      });
    cy.findByLabelText('Current number of seats').type('14');
    cy.findByLabelText('Built-up width').type('1400');
    cy.findByLabelText('Housing area').type('5200');

    cy.wait(1500);
    cy.contains('Autosaving');
  });
});
