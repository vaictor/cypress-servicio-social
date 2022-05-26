// Caso de prueba para infogral educ
describe('Profesor en educ', () => {
 
    before(() => {

    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev();
    })

    it('Profesor: Nuevo texto / Información general', () => {

        cy.get(':nth-child(5) > :nth-child(2) > .card > .course-image')
        .click()

        cy.visit('http://deveduc.ddns.net:88/profesor/infogral/index_admon.php')

        cy.get('#dropdownInfogral')
        .click()

        cy.get('#dropdownInfogralTexto')
        .click()

        cy.get('#titulo')
        .type("Horario de clase")
        .should('have.value','Horario de clase')

        cy.get(':nth-child(2) > .form-control')
        .type("presencial")
        .should('have.value','presencial')

        cy.get("iframe.cke_wysiwyg_frame").then(function($iframe) {
            const $body = $iframe.contents().find("body");
            //console.log($body);
            cy.wrap($body[0]).type("The JWT’s signature is a cryptographic mechanism designed to secure the JWT’s data with a digital signature unique to the contents of the token. The signature ensures the JWT’s integrity so that consumers can verify it hasn’t been tampered with by a malicious actor" +
            "The JWT’s signature is a combination of three things:"+
            "<ul><li>the JWT’s header</li>"+
            "<li>the JWT’s payload</li>"+
            "<li>a secret value</li></ul>");
          });

          cy.get('#envio')
          .click()


          cy.get(".archivo")
          .contains('Horario de clase')
          .should('exist')
          //.should('have.value','<strong>Horario de clase</strong>')


         
        
    })


    it.only('Profesor: Nuevo adjunto / Información general', () => {


        cy.visit('http://deveduc.ddns.net:88/profesor/infogral/index_admon.php')

        cy.get(':nth-child(5) > :nth-child(2) > .card > .course-image')
        .click()

        cy.visit('http://deveduc.ddns.net:88/profesor/infogral/index_admon.php')

        cy.get('#dropdownInfogral')
        .click()
        

        cy.get('#dropdownInfogralAdjunto')
        .click()

        cy.get('#inputInfogralAdjuntoArchivo')
        .attachFile("app_icon.png")
        
        cy.get('#inputInfogralAdjuntoNombre')
        .type("Nombre test")
        .should('have.value','Nombre test')

        cy.get('#inputInfogralAdjuntoDescripcion')
        .type("Adjunto test descripción")
        .should('have.value','Adjunto test descripción')


        cy.get('#selectInfogralAdjuntoDestino').select('Sin carpeta')
       

        cy.get('#btnInfogralAdjuntoGuardar')
        .click() 
    })

  })