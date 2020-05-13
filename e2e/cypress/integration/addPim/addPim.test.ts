/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Add Pim', () => {
  it('allows to add pim', () => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();

    NavigationMenu.goToPim();
    cy.findByRole('button', { name: 'Add property' }).click();
    cy.findByText('Property').click();
    cy.findByText('House').click();
    cy.findByText('Next').click();
    cy.findByLabelText('Street address').type('Trufmarkt');
    cy.findByLabelText('City').type('Amsterdam');
    cy.findByLabelText('Number of house').type('15');
    cy.findByLabelText('Zipcode').type('123');
    cy.findAllByRole('button', { name: 'Add property' })
      .last()
      .click();
    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.pimDetailsLink.replace(':uid', 'test'));
    });
  });

  it('shows info about conflicts and allows to add PIM with existed address', () => {
    cy.visit(NavigationMenu.pimLink);
    cy.findByRole('button', { name: 'Add property' }).click();
    cy.findByText('Property').click();
    cy.findByText('House').click();
    cy.findByText('Next').click();
    cy.findByLabelText('Street address').type('Trufmarkt');
    cy.findByLabelText('City').type('Rotterdam');
    cy.findByLabelText('Number of house').type('15');
    cy.findByLabelText('Zipcode').type('123');
    cy.findAllByRole('button', { name: 'Add property' })
      .last()
      .click();
    cy.contains('Oh, there are already');
    cy.findByRole('button', { name: 'Yes, add the same address' }).click();
    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.pimDetailsLink.replace(':uid', 'test'));
    });
  });

  it('shows unexpected errors during save', () => {
    cy.visit(NavigationMenu.pimLink);
    cy.findByRole('button', { name: 'Add property' }).click();
    cy.findByText('Property').click();
    cy.findByText('House').click();
    cy.findByText('Next').click();
    cy.findByLabelText('Street address').type('Trufmarkt');
    cy.findByLabelText('City').type('Test');
    cy.findByLabelText('Number of house').type('15');
    cy.findByLabelText('Zipcode').type('123');
    cy.findAllByRole('button', { name: 'Add property' })
      .last()
      .click();
    cy.contains('An error occurred. Try again later.');
    cy.findByLabelText('close').click();
  });
});