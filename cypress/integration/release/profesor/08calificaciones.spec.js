describe("RELEASE: Pruebas del alumno de la plataforma educ", () => {
  beforeEach(() => {
    cy.iniciarSesionDev();

    cy.intercept({
      method: "POST",
      url: "/curso/calificaciones/includes/calificaciones.controller.php",
    }).as("reqCrearCalificaciones");
    
  });

  const criterio= "Prueba cypress";
  it("Profesor: Calificaciones en educ / Crear un nuevo criterio", () => {
    cy.get("#10459")
    .click();

    cy.get('li').contains('Calificaciones')
    .click()

    cy.wait(500)

    cy.get("#nuevo")
    .click();

    cy.get("#btnGroupDrop1")
    .click();

    cy.get(".open > .dropdown-menu > :nth-child(1) > #folder-btn")
    .click();

    cy.get("#criterioss")
    .type(criterio);

    cy.get("#valores")
    .type("9");

    cy.get("#forosImport")
    .select("Primera parcial")

    cy.get("#btn_salvar")
    .click()

    cy.wait("@reqCrearCalificaciones")

    console.log("Termina crear criterio")
  });

  it("Profesor: Calificaciones en educ / Modificar Criterio", () =>{
    cy.get("#10459")
    .click();

    cy.get('li').contains('Calificaciones')
    .click()

    cy.wait(500)

    cy.get("#nuevo")
    .click();

    cy.get(".btn-warning").first()
    .click()

    cy.get("#val_criterio").clear()
    .type(criterio+"Editado");

    cy.get("#valvalor_def").clear()
    .type("10");

    cy.get("#btn_salvarM")
    .click()

    cy.contains(criterio+"Editado")
    
    console.log("Termina Editar criterio")
  })

  it.skip("Profesor: Calificaciones en educ / Poner calificacion", () =>{
    cy.get("#10459")
    .click();

    cy.get('li').contains('Calificaciones')
    .click()
    
    cy.wait(500)

    cy.get('.inputcentrado').then((id) => {
        for(let i =0; i<id.length ;i++ ){
            cy.get("#"+id[i].id).clear()
            .type(Math.floor(Math.random()*(10-5)+5))
        }
      })
      cy.wait(1000)

    console.log("Termina Poner calificacion aleatoria")
  })

  it.skip("Profesor: Calificaciones en educ / Notificar al primer alumno", () =>{
    cy.get("#10459")
    .click();

    cy.get('li').contains('Calificaciones')
    .click()

    cy.get('label').then((id) => {
        console.log(id)
        console.log(id[2].outerText)
        let nombre = id[2].outerText
        if(nombre == "Oculto"){
            cy.get(".fa.checkboxx").click()
        }
    })
    cy.get(".btn.btn-success.btn-xs").then((id) => {
        console.log(id[1])
        cy.get(id[1]).click()
    })
    cy.wait(500)

    cy.contains("Hecho").click()

    cy.wait(5000)

    console.log("Termina notificar calificacion")
  })

  it("Profesor: Calificaciones en educ / Eliminar Criterio", () =>{
    cy.get("#10459")
    .click();

    cy.get('li').contains('Calificaciones')
    .click()

    cy.wait(500)

    cy.get("#nuevo")
    .click();

    cy.get(".btn-danger").first()
    .click()

    cy.get("#btn_eliminar")
    .click()
    
    cy.wait(500)

    console.log("Termina Eliminar criterio ")
  })

  it("Profesor: Calificaciones en educ / Crear un nuevo criterio importar actividad ", () => {
    cy.get("#10459")
    .click();

    cy.get('li').contains('Calificaciones')
    .click()

    cy.wait(500)

    cy.get("#nuevo")
    .click();

    cy.get("#btnGroupDrop1")
    .click();

    cy.get(".open > .dropdown-menu > :nth-child(2) > #folder-btn")
    .click();

    cy.get("#tareasImport")
    .select(1)

    cy.get("#valorImp")
    .type("9");

    cy.get("#btn_salvarI")
    .click()

    cy.wait(5000)

    console.log("Termina crear criterio con actividad")
  });
  
  it("Profesor: Calificaciones en educ / Modificar Criterio de Actividad", () =>{
    cy.get("#10459")
    .click();

    cy.get('li').contains('Calificaciones')
    .click()

    cy.wait(500)

    cy.get("#nuevo")
    .click();

    cy.get(".btn-warning").first()
    .click()

    cy.get("#valvalor_def").clear()
    .type("10");

    cy.get("#btn_salvarM")
    .click()
    
    console.log("Termina Editar criterio de actividad")
  })

  it("Profesor: Calificaciones en educ / Eliminar Criterio de Actividad", () =>{
    cy.get("#10459")
    .click();

    cy.get('li').contains('Calificaciones')
    .click()

    cy.wait(500)

    cy.get("#nuevo")
    .click();

    cy.get(".btn-danger").first()
    .click()

    cy.get("#btn_eliminar")
    .click()
    
    cy.wait(500)

    console.log("Termina Eliminar criterio de actividad")
  })

});