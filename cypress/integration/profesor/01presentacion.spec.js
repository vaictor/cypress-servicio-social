describe('Pruebas del Profesor de la plataforma educ', () => {

    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })

    it('Profesor: Prensentacion en educ / Cambiar imagen de perfil', () => {

        cy.get(':nth-child(7) > :nth-child(2) > .card > .course-image')
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/alumno/presentacion/index_admon.php')

        
    })

})