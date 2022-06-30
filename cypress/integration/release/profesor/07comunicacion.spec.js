describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()

          cy.intercept({
            method: "GET",
            url: "/api/cursos/alumnos/curso/"+Cypress.env('arrayCursos')+"/foros",
          }).as("reqGetForo");

          cy.intercept({
            method: "POST",
            url: "/curso/foros/controllers/foros.controller.php?axn=crear",
          }).as("reqCrearForo");

          cy.intercept({
            method: "POST",
            url: "/curso/foros/controllers/foros.controller.php?axn=modificar&id_foro=10172",
          }).as("reqModificarForo");

          cy.intercept({
            method: "POST",
            url: "/curso/foros/controllers/foros.controller.php?axn=eliminar_logico&id_foro=10168&estado=1",
          }).as("reqEliminarforo");

          cy.intercept({
            method: "POST",
            url: "/curso/foros/controllers/foros.controller.php?axn=estado&id_foro=10172&estado=0",
          }).as("reqDesactivarForo");
    })

    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {

      const mensajeNombre = "Foro cypress prueba"
      const mensajeDescripcion = "Descripcion prueba cypress"

        it('Profesor: Comunicación en educ / Crear un foro', () => {

            cy.wait(3000)

            cy.get('#'+elem)
            .click()
        
            cy.get('li').contains('Comunicación')
            .click()

            cy.wait("@reqGetForo");

            cy.get('a').contains('Administrar Foros')
            .click()

            cy.get('.nuevoForo')
            .click()

            cy.get('#txt_nombre')
            .type(mensajeNombre)

            cy.get('#tipoNuevo')
            .select('Totalmente abierto').should('have.value', '1')

            cy.get('#selectorEquipo')
            .select('Solo a los que pertenecen al equipo').should('have.value', '1')

            cy.get('.note-editable')
            .type(mensajeDescripcion)

            cy.get('#mover')
            .click()

            cy.wait("@reqCrearForo");
            
            console.log('Termina de editar un foro')
        })

        it('Profesor: Comunicación en educ / Comprobar que exista el foro', () => {

            cy.wait(3000)

            cy.get('#'+elem)
            .click()
        
            cy.get('li').contains('Comunicación')
            .click()

            cy.wait("@reqGetForo");

            cy.get('a').contains('Administrar Foros')
            .click()

            cy.get('.well').invoke('text').should('have.length.gt', 0)  // gt == greater than
      
            console.log("Termina de comprobar que existe el foro");
        })

        it('Profesor: Comunicación en educ / Editar un foro', () => {

            cy.wait(3000)

            cy.get('#'+elem)
            .click()
        
            cy.get('li').contains('Comunicación')
            .click()

            cy.wait("@reqGetForo");

            cy.get('a').contains('Administrar Foros')
            .click()

            cy.wait(3000)

            cy.get('#dropdownMenu1')
            .click()

            cy.wait(1000)

            cy.get('.editarForo')
            .click()

            cy.get('#txt_nombre').clear()
            .type(mensajeNombre+" editado")

            cy.get('.note-editable').clear()
            .type(mensajeDescripcion+" editado")

            cy.get('#mover')
            .click()

            //cy.wait("@reqModificarForo");
            cy.wait(1000);
            
            console.log('Termina de editar un foro')
        })

        it('Profesor: Comunicación en educ / Eliminar foro', () => {
            
            cy.wait(3000)

            cy.get('#'+elem)
            .click()
        
            cy.get('li').contains('Comunicación')
            .click()

            cy.wait("@reqGetForo");

            cy.get('a').contains('Administrar Foros')
            .click()

            cy.wait(3000)

            cy.get('#dropdownMenu1')
            .click()

            cy.wait(1000)

            cy.get('.eliminar_logico').first()
            .click()

            cy.get('button').contains("Aceptar")
            .click()

            cy.wait(1000)
            //cy.wait("@reqEliminarforo")

            console.log('Termina de eliminar el foro')
        })

        it('Profesor: Comunicación en educ / Crear un foro', () => {

            cy.wait(3000)

            cy.get('#'+elem)
            .click()
        
            cy.get('li').contains('Comunicación')
            .click()

            cy.wait("@reqGetForo");

            cy.get('a').contains('Administrar Foros')
            .click()

            cy.get('.nuevoForo')
            .click()

            cy.get('#txt_nombre')
            .type(mensajeNombre)

            cy.get('#tipoNuevo')
            .select('Totalmente abierto').should('have.value', '1')

            cy.get('#selectorEquipo')
            .select('Solo a los que pertenecen al equipo').should('have.value', '1')

            cy.get('.note-editable')
            .type(mensajeDescripcion)

            cy.get('#mover')
            .click()

            cy.wait("@reqCrearForo");

            console.log('Termina de editar un foro')
        })
        
        it('Profesor: Comunicación en educ / Desactivar foro', () => {
            
            cy.wait(3000)

            cy.get('#'+elem)
            .click()
        
            cy.get('li').contains('Comunicación')
            .click()

            cy.wait("@reqGetForo");

            cy.get('a').contains('Administrar Foros')
            .click()

            cy.wait(3000)

            cy.get('#dropdownMenu1')
            .click()

            cy.wait(1000)

            cy.get('.desactivar')
            .click()

            cy.get('button').contains("Aceptar")
            .click()

            cy.wait(1000);
            //cy.wait("@reqDesactivarForo")

            console.log('Termina de desactivar el foro')
        })


        it('Profesor: Comunicación en educ / Eliminar foro', () => {
            
            cy.wait(3000)

            cy.get('#'+elem)
            .click()
        
            cy.get('li').contains('Comunicación')
            .click()

            cy.wait("@reqGetForo");

            cy.get('a').contains('Administrar Foros')
            .click()

            cy.wait(2000)

            cy.get('#dropdownMenu1')
            .click()

            cy.wait(1000)

            cy.get('.eliminar_logico').first()
            .click()

            cy.get('button').contains("Aceptar")
            .click()

            cy.wait(1000);
            //cy.wait("@reqEliminarforo")

            console.log('Termina de eliminar el foro')
        })

        it('Profesor: Comunicación en educ / Comprobar que no exista ningun foro', () => {

            cy.wait(3000)

            cy.get('#'+elem)
            .click()
        
            cy.get('li').contains('Comunicación')
            .click()

            cy.wait("@reqGetForo");

            cy.get('a').contains('Administrar Foros')
            .click()

            cy.get("#seccionForos")
            .contains("No hay foros para este curso")
            .should("exist");

            console.log('Termina de comprobar que no exista ningun foro')

        })
    })
})