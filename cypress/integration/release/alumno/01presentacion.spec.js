describe('RELEASE: Pruebas del Profesor de la plataforma educ', () => {

    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })


    it('Profesor: Prensentacion en educ / Comprobar que haya texto', () => {

        cy.get('#10419')
        .click()
        
        cy.get('#menuPresenta')
        .click()

        cy.get('.container').invoke('text').should('have.length.gt', 0)  // gt == greater than

        console.log('Termina de comprobar que haya elementos')
    })

})