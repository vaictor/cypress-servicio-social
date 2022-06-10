describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    it('Alumno: Comunicación en educ / Comprobar que haya texto', () => {

        cy.get('#10419')
        .click()
        
    })

})