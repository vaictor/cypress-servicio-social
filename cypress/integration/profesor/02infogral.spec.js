// Caso de prueba para infogral educ
describe("Profesor en educ", () => {
  before(() => {});

  beforeEach(() => {
    console.log("Iniciar sesión");
    cy.iniciarSesionDev();
  });

  it("Profesor: Nuevo texto / Información general", () => {
    cy.get('#10419').click();

    cy.visit("http://deveduc.ddns.net:88/profesor/infogral/index_admon.php");

    cy.get("#dropdownInfogral").click();

    cy.get("#dropdownInfogralTexto").click();

    cy.get("#titulo")
      .type("Horario de clase")
      .should("have.value", "Horario de clase");

    cy.get(":nth-child(2) > .form-control")
      .type("presencial")
      .should("have.value", "presencial");

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

    cy.get(".archivo").contains("Horario de clase").should("exist");
    //.should('have.value','<strong>Horario de clase</strong>')
  });



  // Profesor: Nuevo adjunto / Información general
  it("Profesor: Nuevo adjunto / Información general", () => {
    const nuevoAdjuntoNombre = "Nombre test";
    const nuevoAdjuntoDescripcion = "Adjunto test descripción";

    cy.get('#10419').click();

    cy.visit("http://deveduc.ddns.net:88/profesor/infogral/index_admon.php");

    cy.get("#dropdownInfogral").click();

    cy.get("#dropdownInfogralAdjunto").click();

    cy.get('#inputInfogralAdjuntoArchivo')
    .attachFile("app_icon.png")
    
    cy.get('#inputInfogralAdjuntoNombre')
    .type(nuevoAdjuntoNombre)
    .should('have.value',nuevoAdjuntoNombre)

    cy.get('#inputInfogralAdjuntoDescripcion')
    .type(nuevoAdjuntoDescripcion)
    .should('have.value',nuevoAdjuntoDescripcion)

    cy.get('#selectInfogralAdjuntoDestino').select('Sin carpeta')
   
    cy.get('#btnInfogralAdjuntoGuardar')
    .click();

    cy.get('.border >.media > .w-100 > .media > .media-body > .media-heading > strong')
    .should(
      "have.text",
      nuevoAdjuntoNombre);

    cy.get('.w-100 > .media > .media-body > p.m-0').contains(
      nuevoAdjuntoDescripcion);

      cy.get('.border >.media > .w-100 > .media > .media-body > .m-t-15 > [data-cy="linkInfogralAdjuntoVisualizar"]')
    .click()

});


// Profesor: Nueva carpeta / Información general
it("Profesor: Nueva carpeta / Información general", () => {
    const nuevaCarpetaNombre = "Nueva carpeta desde Cypress";
    const nuevaCarpetaDescripcion =
      "Descripcion de la nueva carpeta desde Cypress";

      cy.get('#10419').click();

    cy.visit("http://deveduc.ddns.net:88/profesor/infogral/index_admon.php");

    cy.get("#dropdownInfogral").click();

    cy.get("#dropdownInfogralCarpeta").click();

    cy.get("#inputInfogralNuevaCarpetaNombre")
      .type(nuevaCarpetaNombre)
      .should("have.value", nuevaCarpetaNombre);

    cy.get("#inputInfogralNuevaCarpetaDescripcion")
      .type(nuevaCarpetaDescripcion)
      .should("have.value", nuevaCarpetaDescripcion);

    cy.get("#selectInfogralNuevaCarpetaDestino")
      .select("Sin carpeta")
      .should("have.value", 0);

    cy.get("#btnInfogralGuardarNuevaCarpeta").click();

    cy.get(".border > .media > .media-body > .media-heading").should(
      "have.text",
      nuevaCarpetaNombre
    );

  });


  it("Profesor: Eliminar infogral / Información general", () => {
    cy.get('#10419').click();

    cy.visit("http://deveduc.ddns.net:88/profesor/infogral/index_admon.php");

    cy.get(".btn-outline-danger").click();
    
    cy.wait(500);
    
    cy.get(".swal2-confirm").click();

    cy.wait(1000);

    cy.get(".swal2-success-ring").should('be.visible');

    cy.get(".swal2-confirm").click();
  });

  /*Ordenar.php no funciona en la plataforma: W.I.P 
  it('Profesor: Ordenar / Información general', () => {

    cy.get(':nth-child(4) > .col-md-6 > .card > .course-image')
        .click()

    cy.visit('http://deveduc.ddns.net:88/profesor/infogral/index_admon.php')

    
    cy.get('#btnOrdenar')
    .click()
    
    cy.visit('http://deveduc.ddns.net:88/profesor/infogral/orden.php')

    cy.get('#14262').click();
    
});*/

});