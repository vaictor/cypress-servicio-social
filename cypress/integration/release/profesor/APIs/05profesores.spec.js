describe("RELEASE: API profesores", () => {

    it("Profesor: GET listado de profesores", () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/profesores/curso/10419/profesores',
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


    it("Profesor: PUT Actualiza información del profesor", () => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('devUrl')+'api/cursos/profesores/profesores',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            },
            body: {
                id_usuario: 1,
                id_profesor : 7,
                institucion : 'Universidad de Colima',
                nombramiento : 'Profesor por horas',
				resena : 'Developer / Admin'
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              expect(respuesta.body.error).to.be.false; 
              cy.wrap(respuesta.body.message).should('eq','Registro actualizado');
          }); //get
  
      }); // it


      it("Profesor: PATCH Activar y desactivar perfil", () => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('devUrl')+'api/cursos/profesores/profesores',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            },
            body: {
				id_usuario : 1,
				bandera : 1
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              expect(respuesta.body.error).to.be.false; 
              cy.wrap(respuesta.body.message).should('eq','OK');
          }); //get
  
      }); // it


      it("Profesor: POST Subir una imágen", () => {
        cy.get("#file_upload").attachFile("../app_icon.png");
        cy.request({
            method: 'POST',
            url: Cypress.env('devUrl')+'api/cursos/profesores/profesores',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            },
            body: {
                
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              expect(respuesta.body.error).to.be.false; 
          }); //get
  
      }); // it

  });