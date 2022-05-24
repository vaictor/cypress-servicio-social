describe('Pruebas del alumno la plataforma educ', () => {

    /*
    Cypress.Cookies.defaults({
        preserve: 'PHPSESSID',
        preserve: 'SimpleSAMLAuthToken',
        preserve: 'SimpleSAML',
        preserve: 'idpdisco_saml_lastidp',
        preserve: 'idpdisco_saml_remember',
        preserve: 'Authentication',
        preserve: 'authentication',
        preserve: 'session_id'
    })
    */
 
    before(() => {
       /*
        Cypress.Cookies.debug(true) // now Cypress will log when it alters cookies

        Cypress.Cookies.preserveOnce('PHPSESSID');
        Cypress.Cookies.preserveOnce('_ga');
        Cypress.Cookies.preserveOnce('_gat');
        Cypress.Cookies.preserveOnce('_gid');
        Cypress.Cookies.preserveOnce('mjx.menu');
        Cypress.Cookies.preserveOnce('SimpleSAMLAuthToken');
        Cypress.Cookies.preserveOnce('SimpleSAML');
        Cypress.Cookies.preserveOnce('idpdisco_saml_lastidp');
        Cypress.Cookies.preserveOnce('idpdisco_saml_remember');
        Cypress.Cookies.preserveOnce('Authentication');
        Cypress.Cookies.preserveOnce('authentication');
        Cypress.Cookies.preserveOnce('session_id');
        console.log("Guardar cookies");
    */
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        //cy.iniciarSesionPruebas();
    })


    // Caso de prueba para perfil de profesores
    it.only('Alumno: Profesores en educ developer', () => {
        cy.iniciarSesionDev()   

        cy.get(':nth-child(6) > :nth-child(3) > .col-md-6 > .card > .course-image')
        .click()
        
        cy.visit('http://deveduc.ddns.net:88/profesor/profesor/index.php')



        
    })

  })