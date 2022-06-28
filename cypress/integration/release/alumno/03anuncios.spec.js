describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

  beforeEach(() => {
      cy.iniciarSesionDev()

  })
  
  const arrayCursos = Cypress.env('arrayCursos');
  arrayCursos.forEach(elem => {
    it('Alumno: Anuncios en educ / Comprobar que haya texto', () => {

      cy.intercept({
        method: "GET",
        url: `/api/cursos/profesores/anuncios/curso/${elem}/anuncios/`,
      }).as("reqGetAnuncios");

      cy.get(`#${elem}`)
      .click()

      cy.get('li').contains('Anuncios')
      .click()

      cy.wait("@reqGetAnuncios")

      cy.get('.anuncio')
      .invoke('text')
      .should('have.length.gt', 0)

      console.log("Termina de comprobar que haya un elemento");
    })

  it("Alumno: Anuncios en educ / Encontrar que no hay elementos", () => {

      cy.get(`#${elem}`)
        .click()

      cy.visit(Cypress.env('devUrl')+"alumno/anuncios/index.php");

      cy.wait(500)

      cy.get(".alert")
        .contains("este curso no cuenta con información en este apartado")
        .should("exist");

      console.log("Termina de comprobar que no haya elementos");
    });
  })
})