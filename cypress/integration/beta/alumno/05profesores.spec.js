describe('Pruebas del alumno de educ', () => {

    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })


    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {
        // Caso de prueba para perfil de profesores
        it('Alumno: Profesores en educ', () => {
        
            const confiMensaje = "Se envió este mensaje a tu profesor por correo electrónico. Espera respuesta del mismo en tu bandeja de entrada del correo Universitario"

            cy.get('#'+elem)
            .click()

            cy.visit('http://deveduc.ddns.net:88/alumno/profesor/index.php')

            cy.get('.btn-info').first()
            .click()

            cy.get('#txtProfesorAsunto')
            .type("Monitoreo del del aseguramiento de la calidad de Educ")

            cy.get('#txtProfesorMensaje')
            .type("Esta es una prueba de funcionalidad realizada por el equipo de educ, si recibio este correo haga caso omiso")

            cy.get('#btnProfesorEnviar')
            .should('be.visible')
            .click()

            cy.get('.swal2-popup')
            cy.contains(confiMensaje).should("exist")

            cy.wait(500)
            cy.get('.swal2-confirm')
            .click()

            console.log('Termina el contacto con el profesor')
        })
    })
})