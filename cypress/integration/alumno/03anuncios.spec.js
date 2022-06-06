describe('Pruebas del alumno de la plataforma educ', () => {
    before(() => {
      
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        cy.iniciarSesionDev();
    })

     // Caso de prueba para Anuncios del Alumno
    it('Profesor: Anuncios en educ / Encontrar un elemento', () => {
        cy.iniciarSesionDev()   

        cy.get('#9285')
        .click()

        cy.visit('http://deveduc.ddns.net:88/alumno/anuncios/index.php')

        cy.get(".anuncio")
        .contains('Encuesta sobre prácticas de la materia Desarrollo de Software Seguro')
        .should('exist')
        
        console.log('Termina de comprobar que haya un elemento')
    })

    // Caso de prueba para Anuncios del Alumno
    it('Profesor: Anuncios en educ / Encontrar que no hay elementos', () =>{
        cy.iniciarSesionDev()   

        cy.get('#9285')
        .click()

        cy.visit('http://deveduc.ddns.net:88/alumno/anuncios/index.php')

        cy.get(".alert")
        .contains('este curso no cuenta con información en este apartado')
        .should('exist')

        console.log('Termina de comprobar que no haya elementos')
    })

    
  })