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

    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/general'));

    cy.contains('Isenburgstraat 36 4813 NC Breda');
  });

  it('shows info about error', () => {
    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'test/general'));

    cy.contains('Something went wrong');
  });

  it('allows to edit general info', () => {
    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/general'));

    cy.contains('Isenburgstraat 36 4813 NC Breda');

    cy.findAllByText('Edit mode')
      .first()
      .click();

    cy.get('input[name="city"]').type('Amsterdam New');
    cy.get('input[name="street"]').type('Bahnhoff');
    cy.get('input[name="houseNumber"]').type('20');

    cy.wait(3000);

    cy.findAllByText('Edit mode')
      .eq(1)
      .click();

    cy.findAllByText('Single family').click();
    cy.findAllByText('Final house').click();

    cy.wait(3000);

    cy.findAllByText('Edit mode')
      .eq(2)
      .click();

    cy.findAllByText('Under construction').click();

    cy.wait(3000);

    cy.findAllByText('Edit mode')
      .eq(3)
      .click();

    cy.findAllByText('In consultation').click();
    cy.findAllByText('Recreational home').click();
  });

  it('allows to add floor', () => {
    cy.findByText('Customize').click();
    cy.contains('You don’t have any added floors yet.');

    cy.findByText('Add new floor').click();
    cy.findByText('Attic').click();
    cy.get('input[name="description"]').type('floor description');

    cy.findAllByText('Add new floor')
      .last()
      .click();

    cy.contains('You don’t have any added spaces yet.');
    cy.get('.form-section-add')
      .last()
      .click();

    cy.findByPlaceholderText('Type custom name of space').type('space name');
    cy.findByText('Kitchen').click();
    cy.findByText('Add new space').click();

    cy.contains('space name');

    cy.findByText('Edit mode').click();

    cy.get('input[name="configuration.constructionYear"]').type('2020');
    cy.get('input[name="configuration.notes"]').type('space notes');
    cy.findByText('Main kitchen').click();
    cy.findByText('Dense Kitchen').click();
    cy.findByText('Kitchen island').click();
    cy.findByText('Refrigerator').click();
    cy.findByText('Gas hob').click();
    cy.findByText('Rectangle').click();
    cy.get('input[name="configuration.measurement.width"]').type('12');
    cy.get('input[name="configuration.measurement.length"]').type('12');
    cy.get('input[name="configuration.measurement.surface"]').type('12');
    cy.findByText('Coal stove').click();
    cy.findByText('Wall heating').click();

    cy.wait(3000);
  });

  it('shows pim after change on list', () => {
    cy.findAllByText('PIM')
      .first()
      .click();

    cy.contains('BredaAmsterdam New');
  });
});
