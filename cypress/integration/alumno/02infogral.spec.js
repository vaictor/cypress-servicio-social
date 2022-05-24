describe('Pruebas del alumno de la plataforma educ', () => {
    before(() => {
      
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev();
    })


// Caso de prueba para infogral del alumno
    it('Alumno: Infogral en educ / listado', () => {
        cy.iniciarSesionDev()   

        cy.get(':nth-child(6) > :nth-child(3) > .col-md-6 > .card > .course-image')
        .click()

        cy.visit('http://deveduc.ddns.net:88/alumno/infogral/')
        
    })

    

  })