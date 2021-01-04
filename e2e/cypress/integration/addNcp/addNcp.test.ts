/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Add Ncp', () => {
  it('allows to add ncp from menu', () => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();
    cy.wait(1500);

    NavigationMenu.goToPim();
    cy.get('[aria-controls="add-menu"]').click();
    cy.wait(1000);

    cy.findByTestId('add-menu-property').click();
    cy.findByText('New Construction Project').click();
    cy.findAllByText('Houses')
      .last()
      .click();
    cy.findByText('Next').click();
    cy.findByLabelText('Project name').type('Test project');
    cy.findByLabelText('Additional project name (designation)').type('v2');
    cy.findByLabelText('Street').type('Trufmarkt');
    cy.findByLabelText('House number').type('8');
    cy.findByLabelText('Addition').type('A');
    cy.findByLabelText('City').type('Amsterdam');
    cy.findByLabelText('Zipcode').type('123');
    cy.findByText('e.g [Country]').click();
    cy.findByText('Poland').click();

    cy.findAllByRole('button', { name: 'Add property' })
      .last()
      .click();
    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.projectDetailsLink.replace(':id', 'ncp_1/general'));
    });
  });

  it('allows to add ncp from list', () => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();
    cy.wait(1500);

    NavigationMenu.goToPim();
    cy.findByTestId('menu-item-new_construction').click();
    cy.findByText('Add NC project').click();

    cy.contains('What kind of project you want to add?');
  });
});
