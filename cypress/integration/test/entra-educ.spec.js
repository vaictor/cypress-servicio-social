/// <reference types="Cypress" />

describe('Pruebas de la plataforma educ', () => {
    
    beforeEach(() => {
        Cypress.Cookies.defaults({
           preserve: /[\s\S]*/
        });


        Cypress.Cookies.debug(true) // now Cypress will log when it alters cookies

        Cypress.Cookies.preserveOnce('PHPSESSID', 'remember_token');
        Cypress.Cookies.preserveOnce('_ga', 'remember_token');
        Cypress.Cookies.preserveOnce('_gat', 'remember_token');
        Cypress.Cookies.preserveOnce('_gid', 'remember_token');
        Cypress.Cookies.preserveOnce('mjx.menu', 'remember_token');
        Cypress.Cookies.preserveOnce('SimpleSAMLAuthToken', 'remember_token');
        Cypress.Cookies.preserveOnce('Authentication', 'remember_token');
        Cypress.Cookies.preserveOnce('authentication', 'remember_token');
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
        

        
    })


    it.only('Visitar EDUC de pruebas', () => {
        
          cy.iniciarSesionPruebas()

    })


    it('Visitar EDUC developer', () => {

        cy.iniciarSesionDev()
        
    })
  })