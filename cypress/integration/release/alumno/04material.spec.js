describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()

        cy.intercept({
            method: "GET",
            url: "/api/cursos/profesores/mde/curso/"+Cypress.env('arrayCursos')+"/materiales",
          }).as("reqGetMaterial");
    })

    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {
        it('Alumno: Material de estudio en educ / Comprobar que haya texto', () => {

            cy.get('#'+elem)
            .click()
        
            cy.get('li').contains('Material de estudio')
            .click()

            cy.wait("@reqGetMaterial")

            cy.get('.archivo').invoke('text').should('have.length.gt', 0)  // gt == greater than
            
            cy.wait(1000)
            
            console.log('Termina de comprobar que haya texto')
        })
    })
})