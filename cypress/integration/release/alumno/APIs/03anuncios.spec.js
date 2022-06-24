describe("RELEASE: API anuncios", () => {

    it("Alumno: GET elementos HTML", () => {

        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/alumnos/anuncios/curso/10419/anuncios',
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


      it("Alumno: GET actividades pendientes ", () => {

        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/alumnos/anuncios/curso/10419/usuario/1/actividades',
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
  