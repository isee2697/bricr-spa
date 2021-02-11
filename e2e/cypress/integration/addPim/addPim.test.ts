/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Add Pim', () => {
  it('allows to add pim/House', () => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();
    cy.wait(1500);

    NavigationMenu.goToPim();
    cy.findByTestId('menu-item-residential').click();
    cy.findByRole('button', { name: 'Add property' }).click();

    cy.findAllByText('House')
      .last()
      .click();
    cy.findByText('Next').click();
    cy.findByLabelText('Street address').type('Trufmarkt');
    cy.findByLabelText('City').type('Amsterdam');
    cy.findByLabelText('Number of house').type('15');
    cy.findByLabelText('Zipcode').type('123');
    cy.findAllByRole('button', { name: 'Add property' })
      .last()
      .click();

    cy.wait(1500);
    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/dashboard'));
    });
  });

  it('shows info about conflicts and allows to add PIM with existed address', () => {
    cy.visit(NavigationMenu.pimResidentialLink);
    cy.findByRole('button', { name: 'Add property' }).click();
    cy.findAllByText('House')
      .last()
      .click();
    cy.findByText('Next').click();
    cy.findByLabelText('Street address').type('Isenburgstraat');
    cy.findByLabelText('City').type('Breda');
    cy.findByLabelText('Number of house').type('36');
    cy.findByLabelText('Zipcode').type('4813 NC');
    cy.findAllByRole('button', { name: 'Add property' })
      .last()
      .click();
    cy.contains('Oh, there are already');
    cy.findByRole('button', { name: 'Yes, add the same address' }).click();

    cy.wait(1500);
    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/dashboard'));
    });
  });

  it('shows unexpected errors during save', () => {
    cy.visit(NavigationMenu.pimResidentialLink);
    cy.findByRole('button', { name: 'Add property' }).click();

    cy.findAllByText('House')
      .last()
      .click();
    cy.findByText('Next').click();
    cy.findByLabelText('Street address').type('Trufmarkt');
    cy.findByLabelText('City').type('Test');
    cy.findByLabelText('Number of house').type('15');
    cy.findByLabelText('Zipcode').type('123');
    cy.findAllByRole('button', { name: 'Add property' })
      .last()
      .click();

    cy.wait(500);
    cy.findByLabelText('close').click();
  });
});
