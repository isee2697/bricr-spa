/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('List Pims', () => {
  beforeEach(() => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();
    cy.wait(1500);

    NavigationMenu.goToPim();
    cy.visit(NavigationMenu.pimResidentialLink);
  });

  it('should show current tab title', () => {
    cy.findByTestId('pim-list-residential');
  });

  it('should display count in tabs', () => {
    cy.get('.pim-tab-active').contains(/Active (\([0-9]+([, ]*[0-9])*\))/);
    cy.get('.pim-tab-archived').contains(/Archived (\([0-9]+([, ]*[0-9])*\))/);
  });

  it('should support bulk actions', () => {
    cy.get('.list-select-all input').check();
    cy.get('.pim-list input[type="checkbox"]').should('have.prop', 'checked');
  });

  it('should handle pim menu click correctly', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    const menuIcons = cy.get('.menu-icon');

    if (menuIcons.length > 0) {
      menuIcons
        .first()
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Menu clicked');
        });
    }
  });

  it('should handle filter on sidemenu parking', () => {
    cy.findByTestId('menu-item-parkinglot').click();

    cy.findByTestId('pim-list-parkinglot');
  });

  it('should handle filter on sidemenu plot', () => {
    cy.findByTestId('menu-item-building_plot').click();

    cy.findByTestId('pim-list-building_plot');
  });

  it('should handle filter on sidemenu AOG', () => {
    cy.findByTestId('menu-item-agricultural').click();

    cy.findByTestId('pim-list-agricultural');
  });

  it('should handle filter on sidemenu BOG', () => {
    cy.findByTestId('menu-item-commercial').click({ force: true });

    cy.findByTestId('pim-list-commercial');
  });

  it('should handle pagination', () => {
    cy.wait(2000);

    cy.get('.pagination-container').within(() => {
      cy.get('li')
        .eq(2)
        .click();

      cy.wait(2000);

      cy.get('li')
        .eq(2)
        .find('div')
        .should('have.attr', 'aria-current');
    });
  });

  it('should handle sorting', () => {
    cy.get('.sort-select')
      .first()
      .click();
    cy.get('.MuiPopover-root').within(() => {
      cy.get('li')
        .first()
        .eq(2)
        .click();
    });

    cy.get('.sort-select').contains('Lowest rent price');
  });
});
