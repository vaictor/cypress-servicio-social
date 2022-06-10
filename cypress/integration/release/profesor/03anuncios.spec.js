describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {
        it('Profesor: Anuncios en educ / Comprobar que haya texto', () => {

            cy.get('#'+elem)
            .click()

            cy.get('li').contains('Anuncios')
            .click()

            cy.get('.anuncio').invoke('text').should('have.length.gt', 0)  // gt == greater than
        
            console.log('Termina de comprobar que haya un elemento')
        })

        it("Alumno: Anuncios en educ / Encontrar que no hay elementos", () => {
            cy.iniciarSesionDev();
      
            cy.get(`#${elem}`)
              .click()
      
            cy.get('li').contains('Anuncios')
            .click()
      
            cy.get(".alert")
            .contains("Esta es la pantalla a la que el estudiante llega cada que ingresa al curso.")
            .should("exist");
      
            console.log("Termina de comprobar que no haya elementos");
          });
    })
})