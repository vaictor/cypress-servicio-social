describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {
        it('Alumno: Comunicación en educ / Comprobar que haya texto', () => {

            cy.get('#'+elem)
            .click()
        
            cy.get('li').contains('Comunicación')
            .click()

            cy.wait(3000)

            cy.get('.container').invoke('text').should('have.length.gt', 0)  // gt == greater than
            
            cy.wait(1000)
            
            console.log('Termina de comprobar que haya algun foro')
            
        })
    })
})