/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Pim Details', () => {
  it('allows to show pim media', () => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    cy.userLogin();

    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });

    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/media'));

    cy.contains('Media');
    cy.contains('Pictures');
    cy.contains('Media Links');
    cy.contains('Text Chapters');
    cy.contains('USP’s');
    cy.contains('Tags');
  });
  it('allows to add media link and edit', () => {
    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/media'));
    cy.get('.form-section-add')
      .eq(1)
      .click();

    cy.findByText('You Tube').click();

    cy.get('input[name="url"]')
      .eq(0)
      .type('URL');

    cy.get('.sub-section-header-toggle')
      .eq(0)
      .click();
  });
  it('allows to add text chapter and edit', () => {
    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/media'));
    cy.get('.form-section-add')
      .eq(2)
      .click();
    cy.contains('Text chapter name');

    cy.get('[data-slate-node="value"]').type('Chapter');

    cy.findByText('Garden').click();

    cy.get('.sub-section-header-toggle')
      .eq(0)
      .click();
  });
  it('allows to add usp and edit', () => {
    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/media'));
    cy.get('.form-section-add')
      .eq(3)
      .click();

    cy.findByText('Garden').click();

    cy.get('input[name="description"]')
      .eq(1)
      .type('Usp description');

    cy.get('.sub-section-header-toggle')
      .eq(0)
      .click();
  });
  it('allows to add tag and edit', () => {
    cy.visit(NavigationMenu.pimDetailsLink.replace(':id', 'pim_1/media'));
    cy.get('.form-section-add')
      .eq(4)
      .click();

    cy.contains('Tags');

    cy.findByText('Remote').click();

    cy.get('input[name="description"]')
      .eq(1)
      .type('Tag description');

    cy.get('.sub-section-header-toggle')
      .eq(0)
      .click();
  });
});
