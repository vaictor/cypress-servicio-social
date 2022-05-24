describe('Pruebas de la plataforma educ', () => {
 
    before(() => {
       
    })

    beforeEach(() => {
        console.log("Iniciar sesión")
        //cy.iniciarSesionPruebas();
    })


    it('Profesor: Inicio de sesión a Educ', () => {
        cy.iniciarSesionDev()   

    }) 

  })