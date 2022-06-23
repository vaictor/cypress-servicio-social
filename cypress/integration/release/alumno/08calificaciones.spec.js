describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    
    it('Alumno: Calificaciones en educ / Comprobar que haya texto', () => {

        cy.get('#10419')
        .click()
        
        cy.get('li').contains('Calificaciones')
        .click()

        cy.wait(1000)

        cy.contains("No tiene calificaciones registradas")

        cy.wait(1000)
        console.log('Termina de Comprobar que haya texto')
    })

})