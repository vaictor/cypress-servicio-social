describe("RELEASE: Pruebas del Alumno de la plataforma educ", () => {
    before(() => {});
  
    beforeEach(() => {
      console.log("Iniciar sesión");
      cy.iniciarSesionDev();

      cy.intercept({
        method: "POST",
        url: "/solicitud/solicitud_control.php",
      }).as("reqSolicitud");
    });
  
    it("Profesor: Solicitar un curso / Solicitar un curso", () => {
      cy.get("#dropdownSolicita")
      .click();
  
      cy.get("#ind")
      .check()
  
      cy.wait(500)

      cy.get("#id_tipo_uso")
      .select("1")
      .should('have.value', '1')
  
      cy.get("#lst_materias1")
      .type("mi curso de cypress demo")
      .should('have.value', 'mi curso de cypress demo')

      cy.get("#nivel")
      .select("Superior")

      cy.wait("@reqSolicitud")

      cy.get("#esc_fac")
      .select("FACULTAD DE TELEMATICA")

      cy.wait("@reqSolicitud")

      cy.get("#carrera")
      .select("INGENIERO EN SOFTWARE")

      cy.wait("@reqSolicitud")

      cy.get("#grado")
      .select("6")

      cy.wait(500)

      cy.get("#grupo")
      .select("A")

      cy.get("#ciclo")
      .select("Ciclo escolar Agosto 2022 - Diciembre 2022")

      cy.get(".confirmacion")
      .click()

      cy.wait("@reqSolicitud")
      let buttonText;

      cy.get("#btn_grabar")
      .click()

      cy.wait(10000)
      cy.get('#mBodyS > strong').then(($text) => {
        buttonText = $text.text()
        console.log(buttonText)
        let curso = buttonText.substring(buttonText.length - 5, buttonText.length);
        console.log(curso)

        cy.get("#btn_reg1").click()

        cy.reload(true)
        cy.wait(5000)

        cy.get("#"+buttonText.substring(buttonText.length - 5, buttonText.length))
        .click()
      })
      
      cy.get(".alert")
      .contains("Esta es la pantalla a la que el estudiante llega cada que ingresa al curso.")
      .should("exist");

      console.log("Termina inscripcion de curso");

  
    });
  });