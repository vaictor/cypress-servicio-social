// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("iniciarSesionDev", () => { 
    cy.visit('http://deveduc.ddns.net:88/index.demo')
    cy.wait(500)
    cy.get('#uCorreo')
        .type('vmedina@ucol.mx');

    cy.get('#uClave')
        .type('3qu1p03duc');

    cy.get('.btn-wayf')
        .click();
  });

  Cypress.Commands.add("iniciarSesionPruebas", () => { 
    cy.visit(Cypress.env('testUrl'))
    cy.wait(500)
    cy.get('#btn-login').click()
    cy.get(':nth-child(5) > p > input').click()
  });
