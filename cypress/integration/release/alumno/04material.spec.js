describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    it('Alumno: Material de estudio en educ / Comprobar que haya texto', () => {

        cy.get('#10419')
        .click()
        
    })

})