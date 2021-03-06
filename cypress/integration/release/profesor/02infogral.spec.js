describe('RELEASE: Pruebas del Alumno de la plataforma educ', () => {
  
    beforeEach(() => {
      const idCurso = "#9896";
      cy.iniciarSesionDev();
      cy.get(idCurso).click();
      cy.visit(Cypress.env("devUrl") + "curso/infogral/index_admon.php");

      cy.intercept({
        method: "POST",
        url: "/api/cursos/profesores/infogral/carpetas",
      }).as("reqAgregarCarpeta");

      cy.intercept({
        method: "PUT",
        url: "/api/cursos/profesores/infogral/carpetas",
      }).as("reqEditarCarpeta");

      cy.intercept({
        method: "DELETE",
        url: "/api/cursos/profesores/infogral/carpetas",
      }).as("reqEliminarCarpeta");

      cy.intercept({
        method: "POST",
        url: "/api/cursos/profesores/infogral/info_general",
      }).as("reqAgregarTexto");

      cy.intercept({
        method: "PUT",
        url: "/api/cursos/profesores/infogral/info_general",
      }).as("reqEditarTexto");

      cy.intercept({
        method: "DELETE",
        url: "/api/cursos/profesores/infogral/info_general",
      }).as("reqEliminarTexto");
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

      cy.wait('@reqAgregarCarpeta');

      cy.get('li[class^="folder"]')
        .first()
        .then(($el) => {
          const id = $el.attr("id");
          cy.get("#" + id + " strong")
            .should("have.text", nuevaCarpetaNombre);

          cy.get("#" + id + " p.m-0")
          .should(
            "have.text",
            nuevaCarpetaDescripcion
          );
        })
    });

    it("Profesor: Editar carpeta / Informacion general", () => {
      const carpetaEditarNuevoNombre = "Carpeta editada nombre";
      const carpetaEditarNuevaDesc = "Carpeta editada descripcion";

      cy.get('li[class^="folder"] .media > .media-body > .descarga > .fa')
        .first()
        .click();

      cy.get("#premodif").click();

      cy.get("#txt_nombre_carpeta_modificar")
        .clear()
        .type(carpetaEditarNuevoNombre)
        .should("have.value", carpetaEditarNuevoNombre);

      cy.get("#txt_descriptor_carpeta_modificar")
        .clear()
        .type(carpetaEditarNuevaDesc)
        .should("have.value", carpetaEditarNuevaDesc);

      cy.get("#modal-submit").click();

      cy.wait("@reqEditarCarpeta");

      cy.get('li[class^="folder"]')
        .first()
        .then(($el) => {
          const id = $el.attr("id");
          cy.get("#" + id + " strong")
            .should("have.text", carpetaEditarNuevoNombre);

          cy.get("#" + id + " p.m-0").should(
            "have.text",
            carpetaEditarNuevaDesc
          );
        })
    });

    it("Profesor: Eliminar carpeta / Informacion general", () => {
      cy.get('li[class^="folder"]')
        .first()
        .then(($el) => {
          const id = $el.attr('id');

          cy.get('li[class^="folder"] .media > .media-body > .descarga > .fa')
            .first()
            .click()
    
          cy.get("#menus > :nth-child(3) > .btn").click();
    
          cy.get(
            ".bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
          ).click();
    
          cy.wait('@reqEliminarCarpeta');

          cy.get('#' + id).should('not.exist');
        });

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

      cy.wait('@reqAgregarTexto');

      cy.get("li[id^=Archivo_]")
        .first()
        .then(($el) => {
          const id = $el.attr("id");

           cy.get(
             "#" +
               id +
               " > .media > .contenido-infogral > .media-heading > strong"
           ).should("have.text", nuevoTextoNombre);

           cy.get("#" + id + "> .media > .contenido-infogral > p.m-0").should(
             "have.text",
             nuevoTextoDesc
           );
        });
    });

    it("Profesor: Editar texto/html / Información general", () => {
      const nuevoNombre = "Horario de clase editado";
      const nuevaDesc = "Presencial editado";
      
      cy.get("li[id^=Archivo_]")
        .first()
        .then(($el) => {
          const id = $el.attr("id");

          cy.get(
            "li[id^=Archivo_] .media > .media-body > .descarga > .fa"
          )
            .first()
            .click();

          cy.get("#premodif").click();

          cy.get("#titulo")
            .clear()
            .type(nuevoNombre)
            .should("have.value", nuevoNombre);

          cy.get(":nth-child(3) > .form-control")
            .clear()
            .type(nuevaDesc)
            .should("have.value", nuevaDesc);

          cy.get("iframe.cke_wysiwyg_frame").then(function ($iframe) {
            const $body = $iframe.contents().find("body");
            //console.log($body);
            cy.wrap($body[0])
              .clear()
              .type(
                "The JWT’s signature is a combination of three things:" +
                  "<ul><li>the JWT’s header</li>" +
                  "<li>the JWT’s payload</li>" +
                  "<li>a secret value</li></ul>"
              );
          });

          cy.get("#envio").click();

          cy.wait("@reqEditarTexto");

          cy.get(
            "#" + id + " > .media > .contenido-infogral > .media-heading > strong"
          )
            .should('have.text', nuevoNombre);

          cy.get(
            "#" + id + "> .media > .contenido-infogral > p.m-0"
          )
            .should('have.text', nuevaDesc);
        });
    });

     it("Profesor: Eliminar texto/html / Informacion general", () => {
       cy.get("li[id^=Archivo_]")
         .first()
         .then(($el) => {
           const id = $el.attr("id");

           cy.get("li[id^=Archivo_] .media > .media-body > .descarga > .fa")
             .first()
             .click();

           cy.get("#menus > :nth-child(3) > .btn").click();

           cy.get(
             ".bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
           ).click();

           cy.wait("@reqEliminarTexto");

           cy.get("#" + id).should("not.exist");
         });
     });

    it("Profesor: Nuevo adjunto (imagen) / Información general", () => {
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

      cy.wait('@reqAgregarTexto');

      cy.contains(nuevoAdjuntoNombre).should("exist");
      cy.contains(nuevoAdjuntoDesc).should("exist");
      
      cy.contains(nuevoAdjuntoDesc)
        .first()
        .siblings()
        .eq(2)
        .children()
        .then(link => {
          cy.request(link.prop("href")).its("status").should("eq", 200);
        });
    });

    it("Profesor: Editar adjunto / Información general", () => {
      const adjuntoEditadoNombre = "Adjunto editado nombre";
      const adjuntoEditadoDesc = "Adjunto editado descripcion";
      
      cy.get("li[id^=Archivo_]")
        .last()
        .then($el => {
          const id = $el.attr("id");

          cy.get("li[id^=Archivo_] .descarga").last().click();

          cy.get("#premodif").click();

          cy.get("#txt_nombre_adjunto_modificar")
            .clear()
            .type(adjuntoEditadoNombre)
            .should('have.value', adjuntoEditadoNombre);
          
          cy.get("#txt_descriptor_adjunto_modificar")
            .clear()
            .type(adjuntoEditadoDesc)
            .should("have.value", adjuntoEditadoDesc);
          
          cy.get("#modal-submit").click();

          cy.wait('@reqEditarTexto');

          cy.get(
            "#" +
              id +
              "> .media > .contenido-infogral > .media-heading > strong"
          ).should('have.text', adjuntoEditadoNombre);

          cy.get("#" + id + "> .media > .contenido-infogral > p.m-0").should(
            "have.text",
            adjuntoEditadoDesc
          );
        })
    });

    it("Profesor: Eliminar adjunto / Información general", () => {
      cy.get("li[id^=Archivo_]")
        .last()
        .then(($el) => {
          const id = $el.attr("id");

          cy.get("li[id^=Archivo_] .descarga")
            .last()
            .click();

          cy.get("#menus > :nth-child(3) > .btn").click();

          cy.get(
            ".bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
          ).click();

          cy.wait("@reqEliminarTexto");

          cy.get("#" + id).should("not.exist");
        });
    });

    it("Profesor: Nuevo adjunto (pdf) / Información general", () => {
      const nuevoAdjuntoNombre = "PDF test";
      const nuevoAdjuntoDesc = "PDF test descripción";

      cy.get("#btnGroupDrop1").click();

      cy.get(".open > .dropdown-menu > :nth-child(3) > a").click();

      cy.get("#file_upload").attachFile(
        "Principios de seguridad de desarrollo de software.pdf"
      );

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

      cy.wait("@reqAgregarTexto");

      cy.contains(nuevoAdjuntoNombre).should("exist");
      cy.contains(nuevoAdjuntoDesc).should("exist");

      cy.contains(nuevoAdjuntoDesc)
        .first()
        .siblings()
        .eq(2)
        .children()
        .click()
        .then(() => {
          cy.get(".modal.fade.bs-example-modal-lg.v_pdf").should("be.visible");
        })
    });

    it("Profesor: Nuevo adjunto (docx) / Información general", () => {
      const nuevoAdjuntoNombre = "DOCX test";
      const nuevoAdjuntoDesc = "DOCX test descripción";

      cy.get("#btnGroupDrop1").click();

      cy.get(".open > .dropdown-menu > :nth-child(3) > a").click();

      cy.get("#file_upload").attachFile(
        "Tarea 2. Alias y links.docx"
      );

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

      cy.wait("@reqAgregarTexto");

      cy.contains(nuevoAdjuntoNombre).should("exist");
      cy.contains(nuevoAdjuntoDesc).should("exist");

      cy.contains(nuevoAdjuntoDesc)
        .first()
        .siblings()
        .eq(2)
        .children()
        .then((link) => {
          const href = link.prop("href")
          const url = href.slice(href.lastIndexOf("http"));
          cy.request(url).its("status").should("eq", 200);
        });
    });

    it("Profesor: Nuevo adjunto (xlsx) / Información general", () => {
      const nuevoAdjuntoNombre = "XLSX test";
      const nuevoAdjuntoDesc = "XLSX test descripción";

      cy.get("#btnGroupDrop1").click();

      cy.get(".open > .dropdown-menu > :nth-child(3) > a").click();

      cy.get("#file_upload").attachFile(
        "prueba.xlsx"
      );

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

      cy.wait("@reqAgregarTexto");

      cy.contains(nuevoAdjuntoNombre).should("exist");
      cy.contains(nuevoAdjuntoDesc).should("exist");

      cy.contains(nuevoAdjuntoDesc)
        .first()
        .siblings()
        .eq(2)
        .children()
        .then((link) => {
          const href = link.prop("href")
          const url = href.slice(href.lastIndexOf("http"));
          cy.request(url).its("status").should("eq", 200);
        });
    });

    it("Profesor: Nuevo adjunto (pptx) / Información general", () => {
      const nuevoAdjuntoNombre = "PPTX test";
      const nuevoAdjuntoDesc = "PPTX test descripción";

      cy.get("#btnGroupDrop1").click();

      cy.get(".open > .dropdown-menu > :nth-child(3) > a").click();

      cy.get("#file_upload").attachFile("presentacion.pptx");

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

      cy.wait("@reqAgregarTexto");

      cy.contains(nuevoAdjuntoNombre).should("exist");
      cy.contains(nuevoAdjuntoDesc).should("exist");

      cy.contains(nuevoAdjuntoDesc)
        .first()
        .siblings()
        .eq(2)
        .children()
        .then((link) => {
          const href = link.prop("href");
          const url = href.slice(href.lastIndexOf("http"));
          cy.request(url).its("status").should("eq", 200);
        });
    });

})