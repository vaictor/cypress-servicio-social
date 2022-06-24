describe("RELEASE: API presentación", () => {

    it("Alumno: GET", () => {

        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/alumnos/curso/10419/presentacion',
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

    });


  });
  