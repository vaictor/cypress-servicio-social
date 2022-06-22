describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
      const idCurso = "#10419";
      cy.iniciarSesionDev();
      cy.get(idCurso).click();
      cy.visit(Cypress.env("devUrl") + "curso/actividades/index_admon.php");
    })

    it('Alumno: Actividades en educ / Comprobar que haya texto', () => {
      cy.get("#lista").children().its("length").should("be.gte", 1);
    })
    
    it("Alumno: Actividades en educ / Visitar una actividad", () => {
      cy.get("#lista")
        .get(".select-act:first-child")
        .first()
        .then($el => {
          const actividadTitulo = $el.text()
          cy.wrap($el).click()
          cy.get("h3").should("have.text", actividadTitulo + ' ');
        })
    })

})