describe('RELEASE: Pruebas del Alumno de la plataforma educ', () => {

    beforeEach(() => {
      const idCurso = '#9896';
      cy.iniciarSesionDev()
      cy.get(idCurso).click();
      cy.visit(Cypress.env("devUrl") + "curso/infogral/index_admon.php");
    })

    it('Profesor: Información general en educ / Comprobar que haya texto', () => {

        cy.get('#10419')
        .click()
        
    })

})