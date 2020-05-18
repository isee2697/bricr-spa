/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Authorization', () => {
  it('allows to start password resetting', () => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
    NavigationMenu.goToForgotPassword();
    cy.get('input[name="username"]').type('test');
    cy.get('button[type="submit"]').click();
    cy.contains('sent');
  });

  it('allows to reset password', () => {
    cy.clearSession();
    NavigationMenu.goToResetPasswordPage();
    cy.get('input[name="password"]').type('passw0rd');
    cy.get('input[name="passwordRepeat"]').type('passw0rd');
    cy.get('button[type="submit"]').click();
    cy.contains('successfully');
  });

  it('navigates to dashboard after logging in', () => {
    cy.clearSession();
    cy.visit(Cypress.env().baseUrl);
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
