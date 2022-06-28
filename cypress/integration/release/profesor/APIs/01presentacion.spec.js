describe("RELEASE: API presentación", () => {

    it("Profesor: GET", () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/profesores/curso/10419/presentacion',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              //cy.log(todos.body.data);
              cy.wrap(respuesta.body.data).should('not.be.empty');

          }); //get

    }); // it


    it("Profesor: PUT", () => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('devUrl')+'api/cursos/profesores/presentacion',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            },
            body: {
                idc : 10419,
                nc : '<h1>API test2</h1>'
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              //cy.log(todos.body.data);
              expect(respuesta.body.message, 'Verificy update on database').to.be.oneOf([
                'Registro actualizado',
                'Sin cambios'
              ])
              
          }); //get

    }); // it


  });
  