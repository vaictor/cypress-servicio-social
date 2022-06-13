describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {
        it('Alumno: Profesores en educ / Mandar mensaje a profesores', () => {

            const confiMensaje = "Se envió este mensaje a tu profesor por correo electrónico. Espera respuesta del mismo en tu bandeja de entrada del correo Universitario."

            cy.get(`#${elem}`)
            .click()
            
            cy.get('li').contains('Profesores')
            .click()

            cy.get('.btn-info').first()
            .click()

            cy.get('input').first()
            .type("Monitoreo del del aseguramiento de la calidad de Educ")
            
            cy.get('textarea').first()
            .type("Esta es una prueba de funcionalidad realizada por el equipo de educ, si recibio este correo haga caso omiso")

            cy.get('button').contains('Enviar correo')
            .should('be.visible')
            .click()

            cy.get('.bootbox-body')
            cy.contains(confiMensaje).should("exist")

            cy.wait(500)

            cy.get('.btn-info').contains('Aceptar')
            .click()

            console.log('Termina el contacto con el profesor')
        })
    })
})