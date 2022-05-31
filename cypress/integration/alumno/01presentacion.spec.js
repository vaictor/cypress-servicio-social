describe('Pruebas del Profesor de la plataforma educ', () => {

    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })

    it('Profesor: Prensentacion en educ / Comprobar que haya texto', () => {

        cy.get(':nth-child(7) > :nth-child(2) > .card > .course-image')
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/alumno/presentacion/index.php')

        cy.get(".container")
        .contains('Bienvenido al curso')
        .should('exist')

        console.log('Termina de comprobar que haya elementos')
    })

})