describe('Pruebas del Profesor de la plataforma educ', () => {

    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })

    const ruta = ":nth-child(6) > :nth-child(3) > .col-md-6 > .card > .course-image"

    it('Profesor: Prensentacion en educ / Comprobar que haya texto', () => {

        cy.get(ruta)
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/alumno/presentacion/index.php')

        cy.get(".container")
        .contains('Bienvenido al curso')
        .should('exist')

        console.log('Termina de comprobar que haya elementos')
    })

})