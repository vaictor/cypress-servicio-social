describe('Pruebas del Profesor de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    it('Profesor: Prensentacion en educ / Comprobar que haya texto', () => {

        cy.get('#10419')
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/alumno/presentacion/index.php')

        cy.get('.container').invoke('text').should('have.length.gt', 0)  // gt == greater than

        console.log('Termina de comprobar que haya elementos')
    })

})