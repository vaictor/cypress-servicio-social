describe('Pruebas del alumno de educ', () => {

    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })

    // Caso de prueba para perfil de profesores
    it.only('Alumno: Profesores en educ', () => {

        cy.get(':nth-child(7) > .row > .col-md-6 > .card > .course-image')
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
        console.log('Termina el contacto con el profesor')
        
    })

  })