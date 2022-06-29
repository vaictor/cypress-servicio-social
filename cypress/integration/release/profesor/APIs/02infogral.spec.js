describe("RELEASE: API infogral", () => {

  let id_insertado = 0;
  let id_insertado_comentario = 0;
  let id_curso = 10471;
  let id_usuario = 55859;

  it("Profesor: POST archivo HTML", () => {
    cy.request({
        method: 'POST',
        url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/info_general',
        headers: {
          'content-type': 'application/json',
          'Authorization': Cypress.env('jwtToken')
        },
        body: {
          "cont":"<p>Este es un contenido de control de calidad de educ</p>\n",
          "nombre":"GGGGG",
          "desc":"GGGGG",
          "dest":"raiz",
          "arc":"/content/10471/infogral/55859_",
          "idc":id_curso,
          "idu":id_usuario,
          "sec":1
        }
      }).as('peticionApi');

      cy.get('@peticionApi').then(respuesta => {
          expect(respuesta.status).to.eq(201);
          expect(respuesta.body.error).to.be.false; 
          cy.log(JSON.stringify(respuesta.body.data));
          id_insertado = respuesta.body.data;
      }); //get

  }); // it




  it("Profesor: POST nuevo comentario", () => {
    cy.request({
        method: 'POST',
        url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/comentarios',
        headers: {
          'content-type': 'application/json',
          'Authorization': Cypress.env('jwtToken')
        },
        body: {
          "idrec":id_insertado,
          "comen":"PRE",
          "idau":id_usuario,
          "sec":1,
          "est":0,
          "rep":0,
          "idmod":7,
          "idc":id_curso
        }
      }).as('peticionApi');

      cy.get('@peticionApi').then(respuesta => {
          expect(respuesta.status).to.eq(201);
          expect(respuesta.body.error).to.be.false; 
          cy.log(JSON.stringify(respuesta.body.data));
          id_insertado_comentario = respuesta.body.data;
      }); //get

  }); // it



  it("Profesor: PATCH ordenar elementos", () => {
    cy.request({
        method: 'PATCH',
        url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/info_general',
        headers: {
          'content-type': 'application/json',
          'Authorization': Cypress.env('jwtToken')
        },
        body: {
          "raiz":[{"idArchivo":14369,"idFolder":0,"idSecuencia":"0","type":"archivo"},{"idArchivo":14375,"idFolder":0,"idSecuencia":"1","type":"archivo"},{"idArchivo":14347,"idFolder":0,"idSecuencia":"2","type":"archivo"},{"idArchivo":14373,"idFolder":0,"idSecuencia":"3","type":"archivo"}],"folders":[{"idSecuencia":"4","idFolder":956,"type":"folder","children":[]},{"idSecuencia":"5","idFolder":957,"type":"folder","children":[]},{"idSecuencia":"6","idFolder":958,"type":"folder","children":[]},{"idSecuencia":"7","idFolder":959,"type":"folder","children":[]},{"idSecuencia":"8","idFolder":960,"type":"folder","children":[]},{"idSecuencia":"9","idFolder":990,"type":"folder","children":[]},{"idSecuencia":"10","idFolder":991,"type":"folder","children":[]},{"idSecuencia":"11","idFolder":993,"type":"folder","children":[]},{"idSecuencia":"12","idFolder":995,"type":"folder","children":[]},{"idSecuencia":"13","idFolder":996,"type":"folder","children":[]},{"idSecuencia":"14","idFolder":998,"type":"folder","children":[]},{"idSecuencia":"15","idFolder":999,"type":"folder","children":[]},{"idSecuencia":"16","idFolder":1001,"type":"folder","children":[]}]
        }
      }).as('peticionApi');

      cy.get('@peticionApi').then(respuesta => {
          expect(respuesta.status).to.eq(200);
          expect(respuesta.body.error).to.be.false; 
          cy.log(JSON.stringify(respuesta.body.data));
      }); //get

  }); // it


  it("Profesor: GET comentarios", () => {
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
          cy.log(JSON.stringify(respuesta.body.data));
      }); //get

  }); // it

  it("Profesor: PUT reportar comentario", () => {
    cy.request({
        method: 'PUT',
        url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/comentarios',
        headers: {
          'content-type': 'application/json',
          'Authorization': Cypress.env('jwtToken')
        },
        body: {
          "id_comentario":id_insertado_comentario,
          "modulo":7,
          "id_reportador":id_usuario,
          "id_curso":id_curso,
          "nombre_curso":"UDC10471 Uso de la Plataforma EDUC para la implementaci&oacute;n de materias mediadas por tecnolog&iacute;a - Bach 34",
          "nombre_apartado":"Información general"
        }
      }).as('peticionApi');

      cy.get('@peticionApi').then(respuesta => {
          expect(respuesta.status).to.eq(200);
          expect(respuesta.body.error).to.be.false; 
          cy.log(JSON.stringify(respuesta.body.data));
          cy.log(id_insertado_comentario);
      }); //get

  }); // it


  it("Profesor: DELETE eliminar comentario", () => {
    cy.request({
        method: 'DELETE',
        url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/comentarios',
        headers: {
          'content-type': 'application/json',
          'Authorization': Cypress.env('jwtToken')
        },
        body: {
          "idc":id_insertado_comentario
        }
      }).as('peticionApi');

      cy.get('@peticionApi').then(respuesta => {
          expect(respuesta.status).to.eq(200);
          expect(respuesta.body.error).to.be.false; 
          cy.log(JSON.stringify(respuesta.body.data));
      }); //get

  }); // it

  

/*
  it("Profesor: POST archivo Adjunto", () => {
    cy.request({
        method: 'POST',
        url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/info_general',
        headers: {
          'content-type': 'application/json',
          'Authorization': Cypress.env('jwtToken')
        },
        body: {
          "adjunto":"Se usa un formulario normal"
        }
      }).as('peticionApi');

      cy.get('@peticionApi').then(respuesta => {
          expect(respuesta.status).to.eq(201);
          expect(respuesta.body.error).to.be.false; 
          cy.log(JSON.stringify(respuesta.body.data));
      }); //get

  }); // it
*/

    it("Profesor: GET archivos HTML y adjuntos", () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/curso/'+id_curso+'/info_general',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            }
          }).as('peticionApi');

          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              expect(respuesta.body.error).to.be.false; 
              cy.log(JSON.stringify(respuesta.body.data));
          }); //get
  
      }); // it



      it("Profesor: PUT modificar archivo HTML", () => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/info_general',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            },
            body: {
              "cont":"<p>1111111</p>\n",
              "id_archivo":id_insertado,
              "nombre":"Información general del curso-taller1",
              "desc":"Extracto de la guía instruccional1",
              "arc":"/content/10471/infogral/1_14347.html"
            }
          }).as('peticionApi');
    
          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              expect(respuesta.body.error).to.be.false; 
              //cy.log(JSON.stringify(respuesta.body.data));
              cy.log(id_insertado);
          }); //get
    
      }); // it


      it("Profesor: DELETE archivo HTML", () => {
        cy.request({
            method: 'DELETE',
            url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/info_general',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            },
            body: {
              "ida":id_insertado,
              "idc":id_curso
            }
          }).as('peticionApi');
    
          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(200);
              expect(respuesta.body.error).to.be.false; 
              //cy.log(JSON.stringify(respuesta.body.data));
              cy.log(id_insertado);
          }); //get
    
      }); // it





      it("Profesor: POST carpeta", () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/carpetas',
            headers: {
              'content-type': 'application/json',
              'Authorization': Cypress.env('jwtToken')
            },
            body: {
              "idu":id_usuario,
              "nombre":"PRUEBA",
              "desc":"PRUEBA",
              "idc":id_curso,
              "dest":"raiz",
              "sec":0
            }
          }).as('peticionApi');
  
          cy.get('@peticionApi').then(respuesta => {
              expect(respuesta.status).to.eq(201);
              expect(respuesta.body.error).to.be.false; 
              cy.log(JSON.stringify(respuesta.body.data));
              id_insertado = respuesta.body.data;
          }); //get
  
      }); // it


    it("Profesor: GET carpetas", () => {
      cy.request({
          method: 'GET',
          url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/curso/'+id_curso+'/carpetas',
          headers: {
            'content-type': 'application/json',
            'Authorization': Cypress.env('jwtToken')
          }
        }).as('peticionApi');

        cy.get('@peticionApi').then(respuesta => {
            expect(respuesta.status).to.eq(200);
            expect(respuesta.body.error).to.be.false; 
            cy.log(JSON.stringify(respuesta.body.data));
        }); //get

    }); // it


    it("Profesor: PUT modificar carpeta", () => {
      cy.request({
          method: 'PUT',
          url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/carpetas',
          headers: {
            'content-type': 'application/json',
            'Authorization': Cypress.env('jwtToken')
          },
          body: {
            "idf":id_insertado,
            "nombre":"PRUEBA1",
            "desc":"PRUEBA1"
          }
        }).as('peticionApi');
  
        cy.get('@peticionApi').then(respuesta => {
            expect(respuesta.status).to.eq(200);
            expect(respuesta.body.error).to.be.false; 
            //cy.log(JSON.stringify(respuesta.body.data));
            cy.log(id_insertado);
        }); //get
  
    }); // it


    it("Profesor: DELETE borrar carpeta", () => {
      cy.request({
          method: 'DELETE',
          url: Cypress.env('devUrl')+'api/cursos/profesores/infogral/carpetas',
          headers: {
            'content-type': 'application/json',
            'Authorization': Cypress.env('jwtToken')
          },
          body: {
            "idf":id_insertado
          }
        }).as('peticionApi');
  
        cy.get('@peticionApi').then(respuesta => {
            expect(respuesta.status).to.eq(200);
            expect(respuesta.body.error).to.be.false; 
            //cy.log(JSON.stringify(respuesta.body.data));
            cy.log(id_insertado);
        }); //get
  
    }); // it
  
  });