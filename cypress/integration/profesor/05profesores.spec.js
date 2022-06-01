describe('Pruebas del Profesor de la plataforma educ', () => {

    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })
    
    const ruta = ":nth-child(6) > :nth-child(3) > .col-md-6 > .card > .course-image"
    
    // Caso de prueba para perfil de profesores
    it.only('Profesor: Profesor en educ / Editar perfil', () => {
        const nombramiento = "Profesor de la UDC" 
        const Institucion = "La UDC" 
        const Resena = "Profesor que imparte clases en la UDC" 

        cy.get(ruta)
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/profesor/profesor/index_admon.php')

        cy.get('#btnProfesorEditar')    
        .click()

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
        .click()

        cy.get('#txtProfesorNombramiento')
        .should('have.value',nombramiento)

        cy.get('#txtProfesorInstitucion')
        .should('have.value',Institucion)

        cy.get('#txtProfesorResena')
        .should('have.value',Resena)

        cy.get('#btnProfesorCancelarGuardado')
        .should('be.visible')
        .click()

        cy.contains(Institucion).should("exist")
        
        cy.contains(nombramiento).should("exist")
        cy.contains(Institucion).should("exist")

        cy.reload();

        cy.contains(Institucion).should("exist")
        
        cy.contains(nombramiento).should("exist")
        cy.contains(Institucion).should("exist")

        cy.get('#btnProfesorEditar')    
        .click()

        cy.get('#txtProfesorNombramiento')
        .should('have.value',nombramiento)

        cy.get('#txtProfesorInstitucion')
        .should('have.value',Institucion)

        cy.get('#txtProfesorResena')
        .should('have.value',Resena)

        cy.get('#btnProfesorCancelarGuardado')
        .should('be.visible')
        .click()

        
        
        console.log('Termina de editar el perfil del profesor')
    })

     // Caso de prueba para perfil de profesores
     it('Profesor: Profesor en educ / Cambiar imagen de perfil', () => {
        
        cy.get(ruta)
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/profesor/profesor/index_admon.php')

        cy.get('#btnProfesorEditar')    
        .click()

        cy.get('#imagen')
        .attachFile("app_icon.png")

        cy.get('#btnProfesorGuardar')    
        .click()

        cy.get(".swal2-popup")
        .contains('Perfil editado con éxito')
        .should('exist')

        cy.wait(500)
        cy.get('.swal2-confirm')
        .click()
        
     })

  })