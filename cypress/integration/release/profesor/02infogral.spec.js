describe('RELEASE: Pruebas del Alumno de la plataforma educ', () => {
  
    beforeEach(() => {
      const idCurso = '#9896';
      cy.iniciarSesionDev()
      cy.get(idCurso).click();
      cy.visit(Cypress.env("devUrl") + "curso/infogral/index_admon.php");
    })

    it("Profesor: Nueva carpeta / Información general", () => {
      const nuevaCarpetaNombre = 'Nueva carpeta nombre';
      const nuevaCarpetaDescripcion = 'Nueva carpeta descripcion';

      cy.get("#btnGroupDrop1").click();

      cy.get("#folder-btn").click();

      cy.get("#txt_nombre_carpeta")
        .type(nuevaCarpetaNombre)
        .should("have.value", nuevaCarpetaNombre);

      cy.get("#txt_descriptor_carpeta")
        .type(nuevaCarpetaDescripcion)
        .should("have.value", nuevaCarpetaDescripcion);

      cy.get("#lst_carpeta_destino_carpeta")
        .select("Sin carpeta")
        .should("have.value", "raiz");

      cy.get('#modal-submit').click();

      cy.contains(nuevaCarpetaNombre);
    });

    it("Profesor: Nuevo texto/html / Información general", () => {
      const nuevoTextoNombre = "Horario de clase";
      const nuevoTextoDesc = "Presencial"

      cy.get("#btnGroupDrop1").click();

      cy.get(".dropdown-menu > :nth-child(2) > a").click();

      cy.get("#titulo")
        .type(nuevoTextoNombre)
        .should("have.value", nuevoTextoNombre);

      cy.get(":nth-child(2) > .form-control")
        .type(nuevoTextoDesc)
        .should("have.value", nuevoTextoDesc);

      cy.get("iframe.cke_wysiwyg_frame").then(function ($iframe) {
        const $body = $iframe.contents().find("body");
        //console.log($body);
        cy.wrap($body[0]).type(
          "The JWT’s signature is a cryptographic mechanism designed to secure the JWT’s data with a digital signature unique to the contents of the token. The signature ensures the JWT’s integrity so that consumers can verify it hasn’t been tampered with by a malicious actor" +
            "The JWT’s signature is a combination of three things:" +
            "<ul><li>the JWT’s header</li>" +
            "<li>the JWT’s payload</li>" +
            "<li>a secret value</li></ul>"
        );
      });

      cy.get("#envio").click();

      cy.contains(nuevoTextoNombre).should("exist");
      cy.contains(nuevoTextoDesc).should("exist");
    });

    it("Profesor: Nuevo adjunto / Información general", () => {
      const nuevoAdjuntoNombre = "Nombre test";
      const nuevoAdjuntoDesc = "Adjunto test descripción";

      cy.get("#btnGroupDrop1").click();

      cy.get(".open > .dropdown-menu > :nth-child(3) > a").click();

      cy.get("#file_upload").attachFile("app_icon.png");

      cy.get("#txt_nombre_adjunto")
        .type(nuevoAdjuntoNombre)
        .should("have.value", nuevoAdjuntoNombre);

      cy.get("#txt_descriptor_adjunto")
        .type(nuevoAdjuntoDesc)
        .should("have.value", nuevoAdjuntoDesc);

      cy.get("#lst_carpeta_destino_adjunto")
        .select("Sin carpeta")
        .should("have.value", "raiz");

      cy.get("#modal-submit").click();

      cy.contains(nuevoAdjuntoNombre).should("exist");
      cy.contains(nuevoAdjuntoDesc).should("exist");
      cy.wait(1000);
      cy.contains(nuevoAdjuntoDesc).first().siblings().eq(2).children().click()
    });

})