describe("RELEASE: Pruebas del Alumno de la plataforma educ", () => {
  before(() => {});

  beforeEach(() => {
    console.log("Iniciar sesión");
    cy.iniciarSesionDev();
  });

  it("Alumno: Inscribirse a un curso / Inscribirse al curso UDC10419", () => {
    cy.get("#dropdownInscribe").click();

    cy.get("#idInputCodigo").type("UDC10419");

    cy.get("#btn_aut_insc > .fas").click();

    cy.wait(5000)
    
    console.log("Termina inscripcion de curso");

    cy.reload(true)

    cy.get("#10419")
    .click();

    cy.get("#ayuda")
    .click();

    cy.contains('Darme de baja del curso')
    .click();

    cy.get(".btn-primary")
    .click();

    cy.wait(500)

    cy.get(".modal-footer > .btn")
    .click();
    
    cy.wait(500)
    console.log("Termina salirse del curso");

  });
});
