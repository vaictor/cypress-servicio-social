describe('Pruebas del profesor de la plataforma educ', () => {

   
 
    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })

 

    // Caso de prueba para perfil de profesores
    it.only('Profesor: Profesores en educ developer', () => {

        cy.get(':nth-child(6) > :nth-child(3) > .col-md-6 > .card > .course-image')
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/profesor/profesor/index.php')



        
    })

  })