describe('RELEASE: Pruebas del Alumno de la plataforma educ', () => {


    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()

        cy.intercept({
            method: "GET",
            url: "/api/cursos/profesores/curso/"+Cypress.env('arrayCursos')+"/presentacion",
          }).as("reqGetPresentacion");
    })

    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {
        it('Alumno: Prensentacion en educ / Comprobar que haya texto', () => {

            cy.get(`#${elem}`)
            .click()
            
            cy.get('li').contains('Presentación')
            .click()

            cy.wait("@reqGetPresentacion")

            cy.get('.container').invoke('text').should('have.length.gt', 0)  // gt == greater than
            
            cy.wait(1000)

            console.log('Termina de comprobar que haya texto')
        })
    })
})