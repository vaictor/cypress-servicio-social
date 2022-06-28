describe("RELEASE: API material", () => {

    it("Alumno: GET enlaces y adjuntos", () => {

        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/alumnos/mde/curso/10419/materiales',
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

    it("Alumno: GET carpetas", () => {

      cy.request({
          method: 'GET',
          url: Cypress.env('devUrl')+'api/cursos/alumnos/mde/curso/10419/carpetas',
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


    it("Alumno: GET comentarios", () => {

      cy.request({
          method: 'GET',
          url: Cypress.env('devUrl')+'api/cursos/alumnos/mde/curso/10419/comentarios',
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
  