describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()

        cy.intercept({
            method: "GET",
            url: "/api/cursos/alumnos/curso/"+Cypress.env('arrayCursos')+"/profesores",
          }).as("reqGetProfesores");

          cy.intercept({
            method: "POST",
            url: "/api/cursos/alumnos/profesores",
          }).as("reqEnviarCorreo");
    })

    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {
        it('Alumno: Profesores en educ / Mandar mensaje a profesores', () => {

            const confiMensaje = "Se envió este mensaje a tu profesor por correo electrónico. Espera respuesta del mismo en tu bandeja de entrada del correo Universitario."
            const asuntoMensaje = "Monitoreo del del aseguramiento de la calidad de Educ"
            const bodyMensaje = "Esta es una prueba de funcionalidad realizada por el equipo de educ, si recibio este correo haga caso omiso"

            cy.get(`#${elem}`)
            .click()
            
            cy.get('li').contains('Profesores')
            .click()

            cy.wait("@reqGetProfesores")

            cy.get('.btn-info').first()
            .click()

            cy.get('input').first()
            .type(asuntoMensaje)
            
            cy.get('textarea').first()
            .type(bodyMensaje)

            cy.get('button').contains('Enviar correo')
            .should('be.visible')
            .click()

            cy.wait("@reqEnviarCorreo")

            cy.get('.bootbox-body')
            cy.contains(confiMensaje).should("exist")

            cy.wait(500)

            cy.get('.btn-info').contains('Aceptar')
            .click()

            cy.wait("@reqGetProfesores")

            console.log('Termina el contacto con el profesor')
        })
    })
})