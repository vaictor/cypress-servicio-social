describe("Pruebas del alumno de la plataforma educ", () => {

  beforeEach(() => {
    cy.iniciarSesionDev();
  });

  const arrayCursos = Cypress.env("arrayCursos");
  arrayCursos.forEach((elem) => {
    // Caso de prueba para Anuncios del Alumno
    it("Profesor: Anuncios en educ / Encontrar un elemento", () => {
      cy.iniciarSesionDev();

      cy.get(`#${elem}`)
        .click()

      cy.visit(Cypress.env('devUrl')+"alumno/anuncios/index.php");

      cy.get('.anuncio').invoke('text').should('have.length.gt', 0)  // gt == greater than

      console.log("Termina de comprobar que haya un elemento");
    });

    // Caso de prueba para Anuncios del Alumno
    it("Alumno: Anuncios en educ / Encontrar que no hay elementos", () => {
      cy.iniciarSesionDev();

      cy.get(`#${elem}`)
        .click()

      cy.visit(Cypress.env('devUrl')+"alumno/anuncios/index.php");

      cy.get(".alert")
        .contains("este curso no cuenta con información en este apartado")
        .should("exist");

      console.log("Termina de comprobar que no haya elementos");
    });
  });
});
