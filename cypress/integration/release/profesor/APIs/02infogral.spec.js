describe("RELEASE: API infogral", () => {

    it("Alumno: GET archivos HTML y adjuntos", () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/curso/10419/info_general',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              expect(respuesta.body.error).to.be.false; 
          }); //get
  
      }); // it

    it("Alumno: GET carpetas", () => {
      cy.request({
          method: 'GET',
          url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/curso/10419/carpetas',
          headers: {
            'content-type': 'application/json',
            'Authorization': Cypress.env('jwtToken')
          }
        }).as('peticionApi');

        cy.get('@peticionApi').then(respuesta => {
            expect(respuesta.status).to.eq(200);
            expect(respuesta.body.error).to.be.false; 
        }); //get

    }); // it


    it("Alumno: GET comentarios", () => {
      cy.request({
          method: 'GET',
          url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/curso/10346/apartado/7/comentarios',
          headers: {
            'content-type': 'application/json',
            'Authorization': Cypress.env('jwtToken')
          }
        }).as('peticionApi');

        cy.get('@peticionApi').then(respuesta => {
            expect(respuesta.status).to.eq(200);
            expect(respuesta.body.error).to.be.false; 
        }); //get

    }); // it

  });
  