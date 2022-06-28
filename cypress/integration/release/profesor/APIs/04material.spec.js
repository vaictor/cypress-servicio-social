describe("RELEASE: API material", () => {

    it("Profesor: GET enlaces y adjuntos", () => {

        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/profesores/mde/curso/10419/materiales',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              expect(respuesta.body.error).to.be.false; 
              //cy.log(todos.body.error);
          }); //get
  
      }); // it

    it("Profesor: GET carpetas", () => {

      cy.request({
          method: 'GET',
          url: Cypress.env('devUrl')+'api/cursos/profesores/mde/curso/10419/carpetas',
          headers: {
            'content-type': 'application/json',
            'Authorization': Cypress.env('jwtToken')
          }
        }).as('peticionApi');

        cy.get('@peticionApi').then(respuesta => {
            expect(respuesta.status).to.eq(200);
            expect(respuesta.body.error).to.be.false; 
            //cy.log(todos.body.error);
        }); //get

    }); // it


    it("Profesor: GET comentarios", () => {

      cy.request({
          method: 'GET',
          url: Cypress.env('devUrl')+'api/cursos/profesores/mde/curso/10419/comentarios',
          headers: {
            'content-type': 'application/json',
            'Authorization': Cypress.env('jwtToken')
          }
        }).as('peticionApi');

        cy.get('@peticionApi').then(respuesta => {
            expect(respuesta.status).to.eq(200);
            expect(respuesta.body.error).to.be.false; 
            //cy.log(todos.body.error);
        }); //get

    }); // it


  });
  