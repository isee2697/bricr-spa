/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Add buildimg', () => {
  beforeEach(() => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();

    NavigationMenu.goToPim();
  });

  it('allows to add building and change it', () => {
    NavigationMenu.goToPimBuildings();
    cy.findByRole('button', { name: 'Add new building' }).click();
    cy.findByLabelText('Name of the building').type('Name');
    cy.findByRole('button', { name: 'Add new building' }).click();

    cy.contains('Sheds');
    cy.findByLabelText('Edit mode').click();

    cy.findByText('Machine shed').click();
    cy.findByLabelText('Amount of this same type of building').type('5');
    cy.findByLabelText('Notes').type('notes');
    cy.findByLabelText('Length').type('100');
    cy.findByLabelText('Width').type('100');
    cy.findByLabelText('Surface').type('100');
    cy.findByLabelText('Height').type('10');
    cy.findByLabelText('Volume').type('10000');
    cy.findByLabelText('Construction year').type('2020');


    cy.wait(1500);
    cy.contains('Autosaving');
  });
});
