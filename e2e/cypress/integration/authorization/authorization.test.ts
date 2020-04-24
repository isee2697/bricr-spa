/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Authorization', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it('navigates to dashboard after logging in', () => {
    cy.clearSession();
    cy.userLogin();
    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
  });

  it('logs out after clicking logout', () => {
    NavigationMenu.goToLogout();
    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });
    cy.window().then(win => {
      const accessToken = win.sessionStorage.getItem('accessToken');
      expect(accessToken).to.equal(null);
    });
  });
});
