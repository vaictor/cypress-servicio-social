describe('RELEASE: Pruebas del Alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    it('Alumno: Información general en educ / Comprobar que haya texto', () => {
      cy.get('#9285')
      .click()
      
      cy.visit(Cypress.env('devUrl') + '/curso/infogral/index_admon.php')

      cy.get("#lista").children().its('length').should('be.gte', 1)
    })
})