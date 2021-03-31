/// <reference types="Cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    userLogin(): Chainable<void>;
    clearSession(): Chainable<void>;
    openMenuGroupByTestIdWhenClosed(id: string): Chainable<void>;
    openMenuGroupItemByTestIdWhenClosed(id: string): Chainable<void>;
  }
}
