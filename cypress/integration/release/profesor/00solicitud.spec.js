describe("RELEASE: Pruebas del Alumno de la plataforma educ", () => {
    before(() => {});
  
    beforeEach(() => {
      console.log("Iniciar sesión");
      cy.iniciarSesionDev();
    });
  
    it("Alumno: Inscribirse a un curso / Inscribirse al curso UDC10419", () => {
      cy.get("#dropdownSolicita")
      .click();
  
      cy.get("#ind")
      .check()
  
      cy.wait(500)

      cy.get("#id_tipo_uso").select("1").should('have.value', '1')
  
      cy.get("#lst_materias1")
      .type("mi curso de cypress demo")

      cy.get("#nivel").select("Superior")

      cy.wait(500)

      cy.get("#esc_fac").select("FACULTAD DE TELEMATICA")

      cy.wait(500)

      cy.get("#carrera").select("INGENIERO EN SOFTWARE")

      cy.wait(500)

      cy.get("#grado").select("6")

      cy.wait(500)

      cy.get("#grupo").select("A")

      cy.wait(500)

      cy.get("#ciclo").select("Ciclo escolar Agosto 2022 - Diciembre 2022")

      cy.get(".confirmacion")
      .click()

      cy.wait(1000)
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
        cy.wait(10000)

        cy.get("#"+buttonText.substring(buttonText.length - 5, buttonText.length))
        .click()
      })
      
      console.log("Termina inscripcion de curso");

  
    });
  });