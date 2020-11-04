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

  it('allows edit Inside general', () => {
    cy.openMenuGroupByTestIdWhenClosed('toggle-group-pim_details.menu.pim_intake');
    cy.findByText('Inside').click();

    cy.findAllByPlaceholderText('A few words about inside...')
      .last()
      .type('Inside general description');

    cy.findAllByText('Edit mode')
      .first()
      .click();

    cy.findByPlaceholderText('A few words about renovation...').type('inside renovation description');
    cy.get('input[name="extension.yearOfExtension"]').type('1998');

    cy.findByPlaceholderText('A few words about extension...').type('inside renovation description');
    cy.get('input[name="renovation.yearOfRenovation"]').type('1960');

    cy.findAllByText('Edit mode')
      .first()
      .click();

    cy.findAllByText('Edit mode')
      .last()
      .click();

    cy.get('div[data-testid="select-card"]')
      .first()
      .click();

    cy.findByPlaceholderText('A few words about windows...').type(' I prefer my computer to run windows xp');

    cy.wait(3000);
  });

  it('allows to add floor', () => {
    cy.openMenuGroupByTestIdWhenClosed('toggle-group-pim_details.menu.pim_intake');
    cy.contains('Groundfloor');

    cy.findByText('Add new floor').click();
    cy.findByText('Attic').click();
    cy.findAllByPlaceholderText('A few words about this floor...')
      .last()
      .type('floor description');

    cy.findAllByText('Add new floor')
      .last()
      .click();

    cy.contains('Groundfloor');
    cy.get('.form-section-add')
      .last()
      .click();

    cy.findByPlaceholderText('Type custom name of space').type('space name');
    cy.findByText('Kitchen').click();
    cy.findByText('Add new space').click();

    cy.contains('space name');

    cy.get('input[name="configuration.constructionYear"]').type('2020');
    cy.get('input[name="configuration.notes"]').type('space notes');
    cy.findByText('Main kitchen').click();
    cy.findByText('Dense kitchen').click();
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
    cy.openMenuGroupByTestIdWhenClosed('toggle-group-pim_details.menu.pim_intake');
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
      .eq(3)
      .click();
    cy.findByText('Class roof').click();
    cy.get('input[name="houseOutside.roofInformation.type.notes"]').type('roof type note');
    cy.findAllByText('Plastic')
      .first()
      .click();
    cy.get('input[name="houseOutside.roofInformation.material.notes"]').type('roof material note');
    cy.findByText('Spray foam').click();
    cy.get('input[name="houseOutside.roofInformation.insulation.notes"]').type('roof insulation note');

    cy.wait(3000);
  });

  it('allows to add an outside feature', () => {
    cy.openMenuGroupByTestIdWhenClosed('toggle-group-pim_details.menu.pim_intake');
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
    cy.openMenuGroupByTestIdWhenClosed('toggle-group-pim_details.menu.pim_intake');
    cy.contains('Garden 2');
    cy.findByText('Main garden').click();

    cy.findByText('Place').click();
    cy.get('input[name="configuration.notes"]').type('some note');
    cy.findByText('Neglected').click();
    cy.findByText('North').click();
    cy.findByText('West').click();
    cy.get('input[name="configuration.measurement.width"]').type('200');
    cy.get('input[name="configuration.measurement.length"]').type('100');
    cy.get('input[name="configuration.measurement.surface"]').type('20000');

    cy.wait(3000);
  });

  it('shows pim after change on list', () => {
    cy.findAllByText('PIM')
      .first()
      .click();
    // cy.visit(NavigationMenu.pimResidentialLink);
    cy.findByTestId('menu-item-residential').click();

    cy.contains('BredaAmsterdam New');
  });

  it('allows to edit property details of house', () => {
    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'PIM_1/general'));

    cy.findAllByText('Edit mode')
      .eq(1)
      .click();

    cy.findAllByText('Single family')
      .first()
      .click();

    cy.findAllByText('Semi - detached')
      .first()
      .click();
  });

  it('allows to edit property details of apartment', () => {
    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'PIM_2_APARTMENT/general'));

    cy.findAllByText('Edit mode')
      .eq(1)
      .click();

    cy.findAllByText('One bedroom apartment')
      .first()
      .click();

    cy.findAllByText('Corridor apartment')
      .first()
      .parent()
      .click();
  });

  it('allows to edit property details of Commercial/bog', () => {
    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'PIM_3_BOG/general'));

    cy.findAllByText('Edit mode')
      .eq(1)
      .click();

    cy.findAllByText('Business space')
      .first()
      .click();

    cy.findAllByText('Leissure')
      .first()
      .click();
  });

  it('allows to edit property details of agricultural', () => {
    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'PIM_4_AOG/general'));

    cy.findAllByText('Edit mode')
      .eq(1)
      .click();

    cy.findAllByText('Arable Farm')
      .first()
      .click();

    cy.findAllByText('Other company')
      .first()
      .click();
  });

  it('allows to edit property details of parking lot', () => {
    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'PIM_5_PARKING/general'));

    cy.findAllByText('Edit mode')
      .eq(1)
      .click();

    cy.findAllByText('Garage')
      .first()
      .click();

    cy.findAllByText('On own property')
      .first()
      .click();
  });

  it('allows to edit property details of building plot', () => {
    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'PIM_6_PLOT/general'));

    cy.findAllByText('Edit mode')
      .eq(1)
      .click();

    cy.findAllByText('Clay')
      .first()
      .click();

    cy.findAllByText('Is ready for construction')
      .first()
      .click();
  });
});
