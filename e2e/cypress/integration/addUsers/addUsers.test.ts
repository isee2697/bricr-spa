/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Users', () => {
  beforeEach(() => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();

    cy.wait(1500);
    NavigationMenu.goToPim();
  });

  it('allows to add user and edit', () => {
    NavigationMenu.goToUsers();

    cy.findByRole('button', { name: 'Add user' }).click();

    cy.findByLabelText('First name').type('Andreas');
    cy.findByLabelText('Last name').type('Otten');
    cy.findByLabelText('Email').type('andreas@bricr.com');
    cy.findByLabelText('Function Description').type('Lord');

    cy.findByRole('button', { name: 'Add' }).click();

    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.userDetails.replace(':id', 'test1'));
    });

    cy.findAllByLabelText('Edit mode')
      .first()
      .click();

    cy.findAllByText('Male').click();

    cy.wait(1500);
    cy.contains('Autosaving');
    cy.get('.MuiAlert-filledSuccess');
  });
});
