describe('Pruebas del Profesor de la plataforma educ', () => {

    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev()
    })

    
    it('Profesor: Prensentacion en educ / Cambiar imagen de perfil', () => {

        cy.get('#10419')
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/profesor/presentacion/index_admon.php')

        cy.wait(500)

        cy.get('#btnPresentacionModificar')
        .click()

        cy.wait(500)

        cy.get("iframe.cke_wysiwyg_frame").then(function ($iframe) {
            const $body = $iframe.contents().find("body");
            //console.log($body);
            cy.wrap($body[0]).type(
              "The JWT’s signature is a cryptographic mechanism designed to secure the JWT’s data with a digital signature unique to the contents of the token. The signature ensures the JWT’s integrity so that consumers can verify it hasn’t been tampered with by a malicious actor" +
                "The JWT’s signature is a combination of three things:" +
                "<ul><li>the JWT’s header</li>" +
                "<li>the JWT’s payload</li>" +
                "<li>a secret value</li></ul>"
            );
          });

        cy.get('#btnPresentacionModificar')
        .click();

        cy.wait(500)

        //La prueba falla porque da error 401, por el token
        
    })

})