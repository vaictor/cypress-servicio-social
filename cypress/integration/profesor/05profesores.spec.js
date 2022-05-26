describe('Pruebas del Profesor de la plataforma educ', () => {

    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })

    //Caso de prueba para mandar correo
    it.only('Profesor: Profesor en educ / Mandar correo', () => {

        cy.get(':nth-child(5) > :nth-child(2) > .card > .course-image')
        .click()

        cy.visit('http://deveduc.ddns.net:88/profesor/profesor/index.php')

        cy.get('#btnProfesorEnviarCorreo419')    
        .click()

        cy.get('#txtProfesorAsunto')
        .type("Duda para Horacio desde cypress")

        cy.get('#txtProfesorMensaje')
        .type("Horacio Gerzaín Avalos Aguayo, esto es una prueba automática desde cypess")

        cy.get('#btnProfesorEnviar')
        .should('be.visible')
        .click()

        cy.wait(500)
        cy.get('.swal2-confirm')
        .should('be.visible')
        .click()

        console.log('Termina de mandar correo al profesor')
    })
    
    // Caso de prueba para perfil de profesores
    it('Profesor: Profesor en educ / Editar perfil', () => {

        cy.get(':nth-child(5) > :nth-child(2) > .card > .course-image')
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/profesor/profesor/index.php')

        cy.get('#btnProfesorEditar')    
        .click({force: true})

        cy.get('#txtProfesorNombramiento').clear()
        .type("Profesor de la UDC")
        .should('have.value','Profesor de la UDC')

        cy.get('#txtProfesorInstitucion').clear()
        .type("La UDC")
        .should('have.value','La UDC')

        cy.get('#txtProfesorResena').clear()
        .type("Profesor que imparte clases en la UDC")
        .should('have.value','Profesor que imparte clases en la UDC')

        cy.get('#btnProfesorGuardar')
        .should('be.visible')
        .click()

        cy.wait(500)
        cy.get('.swal2-confirm')
        .click()
        
        console.log('Termina de editar el perfil del profesor')
    })
    

  })