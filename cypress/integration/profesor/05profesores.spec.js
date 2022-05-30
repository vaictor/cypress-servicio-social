describe('Pruebas del Profesor de la plataforma educ', () => {

    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })

    //Caso de prueba para mandar correo
    it('Profesor: Profesor en educ / Mandar correo', () => {

        cy.get(':nth-child(4) > .col-md-6 > .card > .course-image')
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
    it.only('Profesor: Profesor en educ / Editar perfil', () => {
        const nombramiento = "Profesor de la UDC" 
        const Institucion = "La UDC" 
        const Resena = "Profesor que imparte clases en la UDC" 

        cy.get(':nth-child(4) > .col-md-6 > .card > .course-image')
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/profesor/profesor/index.php')

        cy.get('#btnProfesorEditar')    
        .click({force: true})

        cy.get('#txtProfesorNombramiento').clear()
        .type(nombramiento)
        .should('have.value',nombramiento)

        cy.get('#txtProfesorInstitucion').clear()
        .type(Institucion)
        .should('have.value',Institucion)

        cy.get('#txtProfesorResena').clear()
        .type(Resena)
        .should('have.value',Resena)

        cy.get('#btnProfesorGuardar')
        .should('be.visible')
        .click()

        cy.wait(500)
        cy.get('.swal2-confirm')
        .click()

        cy.get('#btnProfesorEditar')    
        .click({force: true})

        cy.get('#txtProfesorNombramiento')
        .should('have.value',nombramiento)

        cy.get('#txtProfesorInstitucion')
        .should('have.value',Institucion)

        cy.get('#txtProfesorResena')
        .should('have.value',Resena)

        cy.get('#btnProfesorCancelarGuardado')
        .should('be.visible')
        .click({force: true})
/*
        cy.get(':nth-child(1) > .media-body > :nth-child(2) > em > span')
        .should('have.value',nombramiento)

        cy.get(':nth-child(1) > .media-body > :nth-child(2) > em > strong')
        .should('have.value',Institucion)

        cy.get('.media-list > :nth-child(1) > .media-body > :nth-child(3)')
        .should('have.value',Resena)
        */


        
        console.log('Termina de editar el perfil del profesor')
    })
     // Caso de prueba para perfil de profesores
     it('Profesor: Profesor en educ / Cambiar imagen de perfil', () => {
        
        cy.get(':nth-child(4) > .col-md-6 > .card > .course-image')
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/profesor/profesor/index.php')

        cy.get('#btnProfesorEditar')    
        .click({force: true})

        //da error
        cy.get('#imagen')
        .attachFile("app_icon.png", { subjectType: 'input' })



     })

  })