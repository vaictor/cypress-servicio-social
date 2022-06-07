Cypress._.times(10, () => {
describe('Pruebas del Profesor de la plataforma educ', () => {

    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })

    
    it('Profesor: Prensentacion en educ / Editar y guardar', () => {

        const confiMensaje = "Presentación guardada con éxito"
        const Presentacion = "Mensaje de prueba"

        cy.get('#10419')
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/profesor/presentacion/index_admon.php')

        cy.wait(500)

        cy.get('#btnPresentacionModificar')
        .click()

        cy.wait(1500)

        cy.get("iframe.cke_wysiwyg_frame").then(function ($iframe) {
          const $body = $iframe.contents().find("body");
          //console.log($body);
          cy.wrap($body[0]).clear().type(Presentacion);
        });

        cy.get('#btnPresentacionGuardar')
        .click();

        cy.get('.swal2-popup')
        cy.contains(confiMensaje).should("exist")

        cy.wait(500)
        cy.get('.swal2-confirm')
        .click()

        //La prueba falla porque da error 401, por el token
        
    })

})

}) // run n times 