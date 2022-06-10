describe('Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev();
    })
    const arrayCursos = Cypress.env('arrayCursos');
arrayCursos.forEach(elem => {

// Caso de prueba para infogral del alumno
    it('Alumno: Infogral en educ / listado', () => {
        cy.iniciarSesionDev()   

        cy.get('#'+elem)
        .click()

        cy.visit('http://deveduc.ddns.net:88/alumno/infogral/')
        
    })
})
  })