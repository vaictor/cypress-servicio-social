describe('Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev();
    })

// Caso de prueba para infogral del alumno
    it('Alumno: Infogral en educ / listado', () => {
        cy.iniciarSesionDev()   

        cy.get('#10419')
        .click()

        cy.visit('http://deveduc.ddns.net:88/alumno/infogral/')
        
    })

  })