describe("RELEASE: API profesores", () => {

    it("Alumno: GET listado de profesores", () => {

        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/alumnos/curso/10419/profesores',
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


      it("Alumno: POST correo a profesor ", () => {

        cy.request({
            method: 'POST',
            url: Cypress.env('devUrl')+'api/cursos/alumnos/profesores',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            },
            body: {id_curso: 10419,
                asunto : 'Aseguramiento de calidad EDUC',
                correo : 'vmedina@ucol.mx',
                msj : 'Este es un correo de aseguramiento de la calidad, por favor haga caso omiso.',
                modulo : 'Bases de datos para internet - 3A',
				usuario : 'Victor Medina',
				id_usuario : 1,
				correo_remitente : 'vmedina@ucol.mx'
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              expect(respuesta.body.error).to.be.false; 
              //cy.log(respuesta.body.error);
          }); //get
  
      }); // it


  });
  