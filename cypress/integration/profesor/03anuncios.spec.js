describe('Pruebas del Profesor de la plataforma educ', () => {
    before(() => {
      
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev();
    })


    // Caso de prueba para Anuncios del profesor
    it('Profesor: Anuncios en educ / Encontrar un elemento', () => {

        cy.get('#10350')
        .click()

        cy.visit('http://deveduc.ddns.net:88/profesor/anuncios/index_admon.php')

        cy.get(".anuncio")
        .contains('Bienvenida al curso')
        .should('exist')
        
        console.log('Termina de comprobar que haya un elemento')
    })
    
    // Caso de prueba para Anuncios del profesor
    it('Profesor: Anuncios en educ / Encontrar que no hay elementos', () =>{

        cy.get('#10350')
        .click()

        cy.visit('http://deveduc.ddns.net:88/profesor/anuncios/index_admon.php')

        cy.get(".alert")
        .contains('Esta es la pantalla')
        .should('exist')

        console.log('Termina de comprobar que no haya elementos')
    })

    // Caso de prueba para Anuncios del profesor
    it('Profesor: Anuncios en educ / Eliminar un elemento', () => {
        
        const confiMensaje ="Se ha eliminado el recurso"

        cy.get('#10350')
        .click()

        cy.visit('http://deveduc.ddns.net:88/profesor/anuncios/index_admon.php')

        cy.get(".anuncio")
        .contains('Bienvenida al curso')
        .should('exist')

        cy.get('#btnAnunciosEliminar30960')
        .click()

        cy.wait(500)

        cy.get(".swal2-popup")
        .contains(confiMensaje)
        .should('exist')

        cy.get('.swal2-confirm')
        .should('be.visible')
        .click()

        cy.get(".anuncio")
        .contains('Bienvenida al curso')
        .should('exist')
        
        console.log('Termina de comprobar que el elemento se haya eliminado')
    })

  })