const { type } = require("os");

describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()

          cy.intercept({
            method: "PUT",
            url: "/api/cursos/profesores/profesores",
          }).as("reqModificarTexto");

          cy.intercept({
            method: "POST",
            url: "/api/cursos/profesores/profesores",
          }).as("reqCambiarFoto");
    })
    
    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {
        it('Profesor: Profesores en educ / Guardar y editar perfil', () => {
            
            const nombramiento = "Profesor por horas de la Facultad de Telemática"
            const  institucion = "Universidad de Colima"
            const resena = "*Análisis, diseño y desarrollo de software \n*Gestión de proyectos de software \n*Profesor por horas"

            cy.get('#'+elem)
            .click()

            cy.get('li').contains('Profesores')
            .click()

            cy.wait(500)

            cy.get('#btnEditar')
            .click()

            cy.wait(1000)

            cy.get('#nombramiento').clear()
            .type(nombramiento)

            cy.get('#institucion').clear()
            .type(institucion)

            cy.get('#resena').clear()
            .type(resena)

            cy.get('#file_upload')
            .attachFile("app_icon.png")

            cy.wait(1000)

            cy.get('#crop')
            .click()

            cy.get('button').contains('Guardar')
            .click()

            cy.wait("@reqModificarTexto")
            cy.wait("@reqCambiarFoto")

            cy.get('#regresar')
            .click()

            cy.get('button').contains('Guardar')
            .click()

            cy.wait("@reqModificarTexto")

            console.log('Termina de editar')
        
        })
    })
})