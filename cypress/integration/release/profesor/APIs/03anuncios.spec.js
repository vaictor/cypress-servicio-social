describe("RELEASE: API anuncios", () => {

    it("Profesor: GET elementos HTML", () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/profesores/anuncios/curso/10419/anuncios/',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              cy.log(respuesta.body.message);
              expect(respuesta.body.error).to.be.false; 
              cy.wrap(respuesta.body.message).should('eq','OK');
              cy.log(JSON.stringify(respuesta.body.data));
              
          }); //get
  
      }); // it

      it("Profesor: POST Nuevo elemento HTML", () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('devUrl')+'api/cursos/profesores/anuncios/curso/10419/anuncios/',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            },
            body: {
              "id_curso":"10471",
              "modulo":"Uso de la Plataforma EDUC para la implementaci&oacute;n de materias mediadas por tecnolog&iacute;a - Bach 34",
              "id_usuario":"55859",
              "fechainicio":"",
              "fechafin":"",
              "descriptor":"prueba",
              "anuncio":"<p>prueba</p>\n",
              "dia":"0",
              "siempre":"1",
              "id_curso_multiple":[],
              "enviarEmail":"0",
              "usuario":"MORENTIN BALLESTEROS GUSTAVO FERNANDO ",
              "correo":"gmorentin@ucol.mx"
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(201);
              cy.log(respuesta.body.message);
              expect(respuesta.body.error).to.be.false; 
              cy.wrap(respuesta.body.message).should('eq','Registro insertado');
              cy.log(JSON.stringify(respuesta.body.data));
              
          }); //get
  
      }); // it




      it("Profesor: POST Múltiple elemento HTML", () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('devUrl')+'api/cursos/profesores/anuncios/curso/10419/anuncios/',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            },
            body: {
              "id_curso":"10471",
              "modulo":"Uso de la Plataforma EDUC para la implementaci&oacute;n de materias mediadas por tecnolog&iacute;a - Bach 34",
              "id_usuario":"55859",
              "fechainicio":"",
              "fechafin":"",
              "descriptor":"prueba",
              "anuncio":"<p>prueba</p>\n",
              "dia":"0",
              "siempre":"1",
              "id_curso_multiple":["3830|Bases de Datos Distribuidas - A","9126|CULTURA"],
              "enviarEmail":"0",
              "usuario":"MORENTIN BALLESTEROS GUSTAVO FERNANDO ",
              "correo":"gmorentin@ucol.mx"
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(201);
              cy.log(respuesta.body.message);
              expect(respuesta.body.error).to.be.false; 
              cy.wrap(respuesta.body.message).should('eq','Registros insertados');
              cy.log(JSON.stringify(respuesta.body.data));
              
          }); //get
  
      }); // it


      it("Profesor: PUT Modificar elemento HTML", () => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('devUrl')+'api/cursos/profesores/anuncios/curso/10419/anuncios/',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            },
            body: {
              "descriptor":"prieba221212",
              "id_anuncio":32276,
              "anuncio":"<p>rererererer21212</p>\n",
              "siempre":"1",
              "dia":"0",
              "fechainicio":"29-06-2022",
              "fechafin":"04-07-2022",
              "enviarMail":"0",
              "modulo":"Uso de la Plataforma EDUC para la implementaci&oacute;n de materias mediadas por tecnolog&iacute;a - Bach 34","id_curso":"10471","correo":"gmorentin@ucol.mx",
              "usuario":"MORENTIN BALLESTEROS GUSTAVO FERNANDO"
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              cy.log(respuesta.body.message);
              expect(respuesta.body.error).to.be.false; 
              cy.wrap(respuesta.body.message).should('eq','Registro actualizado');
              cy.log(JSON.stringify(respuesta.body.data));
              
          }); //get
  
      }); // it

      it("Profesor: GET Alumnos que no han ingresado ", () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/profesores/anuncios/curso/10419/alumnos',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              expect(respuesta.body.error).to.be.false; 
              cy.wrap(respuesta.body.message).should('eq','OK');
              //cy.log(respuesta.body.data);
              cy.log(JSON.stringify(respuesta.body.data));

          }); //get
  
      }); // it



      it("Profesor: GET cursos que pertenecen al usuario", () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/profesores/anuncios/usuario/1/cursos/10419',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              cy.log(respuesta.body.message);
              expect(respuesta.body.error).to.be.false; 
              cy.wrap(respuesta.body.message).should('eq','OK');
              cy.log(JSON.stringify(respuesta.body.data));
              
          }); //get
  
      }); // it

  });
  