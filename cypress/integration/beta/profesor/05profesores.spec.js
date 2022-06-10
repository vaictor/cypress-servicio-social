describe('Pruebas del Profesor de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })
    
    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {
    // Caso de prueba para perfil de profesores
    it(`Profesor: Profesor en educ${elem} / Editar perfil`, () => {
        const nombramiento = "Profesor por horas de la Facultad de Telemática" 
        const Institucion = "Universidad de Colima" 
        const Resena = `*Análisis, diseño y desarrollo de software \n*Gestión de proyectos de software \n*Profesor por horas \n*Curso ${elem}` 
        const confiMensaje= "Perfil editado con éxito"

        cy.get(`#${elem}`)
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

        cy.get('.swal2-html-container')
        cy.contains(confiMensaje).should("exist")

        cy.wait(500)
        cy.get('.swal2-confirm')
        .click()

        cy.reload(true)
        
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

        const confiMensaje= "Perfil editado con éxito"
        
        cy.get(`#${elem}`)
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/profesor/profesor/index_admon.php')

        cy.get('#btnProfesorEditar')    
        .click()

        cy.get('#imagen')
        .attachFile("app_icon.png")

        cy.get('#btnProfesorGuardar')    
        .click()

        cy.get(".swal2-popup")
        .contains(confiMensaje)
        .should('exist')

        cy.wait(500)
        cy.get('.swal2-confirm')
        .click()
        
     })
    })
  })