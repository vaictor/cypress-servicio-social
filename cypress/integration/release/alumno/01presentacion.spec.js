describe('RELEASE: Pruebas del Alumno de la plataforma educ', () => {

    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })

    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {
        it('Alumno: Prensentacion en educ / Comprobar que haya texto', () => {

            cy.get(`#${elem}`)
            .click()
            
            cy.get('li').contains('Presentación')
            .click()

            cy.get('.container').invoke('text').should('have.length.gt', 0)  // gt == greater than
            
            cy.wait(1000)

            console.log('Termina de comprobar que haya texto')
        })
    })
})