describe("RELEASE: API anuncios", () => {

    it("Profesor: GET elementos HTML", () => {

        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/profesores/anuncios/curso/10419/anuncios',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              //cy.log(respuesta.body.error);
              expect(respuesta.body.error).to.be.false; 
              
          }); //get
  
      }); // it


      it("Profesor: GET Alumnos que no han ingresado ", () => {

        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/profesores/anuncios/curso/10419/usuario/1/actividades',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              expect(respuesta.body.error).to.be.false; 
              //cy.log(respuesta.body.error);
          }); //get
  
      }); // it


  });
  