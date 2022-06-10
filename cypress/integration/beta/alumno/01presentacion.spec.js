describe('Pruebas del Profesor de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {

        it('Profesor: Prensentacion en educ / Comprobar que haya texto', () => {

            cy.get('#'+elem)
            .click()
            
            cy.visit(Cypress.env('devUrl')+'alumno/presentacion/index.php')

            cy.get('.container').invoke('text').should('have.length.gt', 0)  // gt == greater than

            console.log('Termina de comprobar que haya elementos')
        })
    })
})