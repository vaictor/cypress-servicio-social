describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    it('Profesor: Anuncios en educ / Comprobar que haya texto', () => {

        cy.get('#10419')
        .click()
        
    })

})