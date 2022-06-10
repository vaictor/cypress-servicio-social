describe('RELEASE: Pruebas del Alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    it('Alumno: Información general en educ / Comprobar que haya texto', () => {

        cy.get('#10419')
        .click()
        
    })

})