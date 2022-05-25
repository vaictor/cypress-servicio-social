describe('Pruebas del profesor de la plataforma educ', () => {

    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })
    
    // Caso de prueba para perfil de profesores
    it.only('Profesor: Profesores en educ developer', () => {

        cy.get(':nth-child(5) > :nth-child(2) > .card > .course-image')
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/profesor/profesor/index.php')

        cy.get('#btnProfesorEditar')
        .click({force: true})

        cy.get('#txtProfesorNombramiento')
        .type("Profesor de la UDC")

        cy.get('#txtProfesorInstitucion')
        .type("La UDC")

        cy.get('#txtProfesorResena')
        .type("Profesor que imparte clases en la UDC")

        cy.get('#btnProfesorGuardar')
        .click()

        cy.wait(500)
        cy.get('.swal2-confirm')
        .click()
        
    })
    

  })