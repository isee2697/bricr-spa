import '@testing-library/cypress/add-commands';

Cypress.Commands.add('userLogin', () => {
  cy.get('input[name="username"]').type(Cypress.env().userLogin);
  cy.get('input[name="password"]').type(Cypress.env().userPassword);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('clearSession', () => {
  cy.window().then(win => {
    win.sessionStorage.clear();
  });
});

Cypress.Commands.add('openMenuGroupByTestIdWhenClosed', (id: string) => {
  cy.findByTestId(id).then(item => {
    if (item.attr('data-toggled') === 'false') {
      cy.findByTestId(id).click();
    }
  });
});

Cypress.Commands.add('openMenuGroupItemByTestIdWhenClosed', (id: string) => {
  cy.findByTestId(id).then(item => {
    if (item.attr('data-toggled') === 'false') {
      cy.findByTestId(id).click();
    }
  });
});
