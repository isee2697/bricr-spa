/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('List Pims', () => {
  beforeEach(() => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();

    NavigationMenu.goToPim();
  });

  it('should show current tab title', () => {
    cy.get('.pim-side-menu-item')
      .eq(0)
      .click();

    cy.get('.pim-list-header').contains('Property');
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

    cy.get('.menu-icon')
      .first()
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Menu clicked');
      });
  });

  it('should handle filter on sidemenu parking', () => {
    cy.findAllByText('Parking lot').click();

    cy.contains('ParkingLot');
  });

  it('should handle filter on sidemenu plot', () => {
    cy.findAllByText('Building plot').click();

    cy.contains('BuildingPlot');
  });

  it('should handle filter on sidemenu AOG', () => {
    cy.findAllByText('AOG').click();

    cy.contains('Agricultural');
  });

  it('should handle filter on sidemenu BOG', () => {
    cy.findAllByText('BOG').click();

    cy.contains('Commercial');
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
    cy.get('.sort-select').click();
    cy.get('.MuiPopover-root').within(() => {
      cy.get('li')
        .eq(2)
        .click();
    });

    cy.get('.sort-select').contains('Lowest rent price');
  });
});
