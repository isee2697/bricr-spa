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
    cy.wait(3000);
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
    cy.findByText('Inside').click();
    cy.contains('Ground floor');

    cy.findByText('Add new floor').click();
    cy.findByText('Attic').click();
    cy.findAllByPlaceholderText('A few words about this floor...')
      .last()
      .type('floor description');

    cy.findAllByText('Add new floor')
      .last()
      .click();

    cy.contains('Ground floor');
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

  it('allows to edit outside info', () => {
    cy.findByText('Outside').click();
    cy.contains('General information');

    cy.findAllByText('Edit mode')
      .first()
      .click();
    cy.get('input[name="houseOutside.generalInformation.notes"]').type('general information note');
    cy.findByText('Normal').click();
    cy.findByText('Fair').click();

    cy.findAllByText('Edit mode')
      .eq(1)
      .click();
    cy.findByText('Balcony').click();
    cy.findByText('Porch').click();
    cy.get('input[name="houseOutside.propertyRelated.notes"]').type('property related note');

    cy.findAllByText('Edit mode')
      .eq(2)
      .click();
    cy.findByText('Class roof').click();
    cy.get('input[name="houseOutside.roofInformation.type.notes"]').type('roof type note');
    cy.findByText('Plastic').click();
    cy.get('input[name="houseOutside.roofInformation.material.notes"]').type('roof material note');
    cy.findByText('Spray foam').click();
    cy.get('input[name="houseOutside.roofInformation.insulation.notes"]').type('roof insulation note');

    cy.wait(3000);
  });

  it('allows to add an outside feature', () => {
    cy.findAllByText('Outside')
      .first()
      .click();
    cy.contains('Garden 2');

    cy.findByText('Add outside feature').click();
    cy.findByText('Garden').click();

    cy.findAllByText('Add outside feature')
      .last()
      .click();

    cy.contains('Garden 3');
  });

  it('allows to edit outside feature', () => {
    cy.contains('Garden 3');
    cy.findByText('Main garden').click();

    cy.findAllByText('Edit mode')
      .first()
      .click();
    cy.findByText('Place').click();
    cy.get('input[name="configuration.notes"]').type('some note');
    cy.findByText('Neglected').click();
    cy.findByText('North').click();
    cy.findByText('West').click();
    cy.get('input[name="configuration.dimensions.height"]').type('200');
    cy.get('input[name="configuration.dimensions.length"]').type('100');
    cy.get('input[name="configuration.surface"]').type('20000');

    cy.wait(3000);
  });

  it('shows pim after change on list', () => {
    cy.findAllByText('PIM')
      .first()
      .click();

    cy.contains('BredaAmsterdam New');
  });
});
