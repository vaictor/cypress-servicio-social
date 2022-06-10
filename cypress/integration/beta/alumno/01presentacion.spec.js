describe('Pruebas del Alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {

        it('Alumno: Prensentacion en educ / Comprobar que haya texto', () => {

            cy.get('#'+elem)
            .click()
            
            cy.visit(Cypress.env('devUrl')+'alumno/presentacion/index.php')

            cy.get('.container').invoke('text').should('have.length.gt', 0)  // gt == greater than

            console.log('Termina de comprobar que haya elementos')
        })
    })
})