describe('Pruebas del alumno de educ', () => {

    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })

    // Caso de prueba para perfil de profesores
    it('Alumno: Profesores en educ', () => {
        
        const confiMensaje = "Se envió este mensaje a tu profesor por correo electrónico. Espera respuesta del mismo en tu bandeja de entrada del correo Universitario"

        cy.get('#10350')
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/alumno/profesor/index.php')

        cy.get('#btnProfesorEnviarCorreo8')
        .click()

        cy.get('#txtProfesorAsunto')
        .type("Duda para Manzano desde cypress")

        cy.get('#txtProfesorMensaje')
        .type("Profesor Javier Manzano Aguilar, esto es una prueba automática desde cypess")

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