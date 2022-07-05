describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

  beforeEach(() => {
      cy.iniciarSesionDev()

      cy.intercept({
        method: "GET",
        url: "/api/cursos/profesores/mde/curso/"+Cypress.env('arrayCursos')+"/materiales",
      }).as("reqGetMaterial");

      cy.intercept({
        method: "POST",
        url: "/curso/mde/includes/material.controller.php",
      }).as("reqCrearMaterial");

      cy.intercept({
        method: "POST",
        url: "/curso/mde/includes/estadistica_eliminar.php",
      }).as("reqEliminar");

      cy.intercept({
        method: "DELETE",
        url: "/api/cursos/profesores/mde/materiales",
      }).as("reqEliminarMaterial");
  })

  const arrayCursos = Cypress.env('arrayCursos');
  arrayCursos.forEach(elem => {

      let idCarpeta = ''

      it('Profesor: Material de estudio en educ / Crear una carpeta', () => {

          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get('#btnGroupDrop1')
          .click()

          cy.wait(1000)

          cy.get('#folder-btn')
          .click()

          cy.get('#txt_nombre_folder')
          .type('Carpeta cypress')

          cy.get('#txt_descriptor_folder')
          .type('Descripcion cypress ')

          cy.get('#lst_siempre_folder')
          .select('Si').should('have.value', '1')

          cy.get('#lst_carpeta_destino_carpeta')
          .select('Sin carpeta').should('have.value', 'raiz')

          cy.get('#modal-submit')
          .click()

          cy.wait("@reqCrearMaterial")
          
          console.log('Termina de crear la carpeta')
      })

      it("Profesor:  Material de estudio en educ / Obtener id de carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

            cy.get('label').then((id) => {
              let array=[]
              for(let i =0; i<id.length ;i++ ){
                  let label = id[i].id
                  let label2 = label.substring(label.length - 5, label.length);
                  array.push(label2)
              }
              var m = Math.max(...array);
              idCarpeta = m
            })
      
          cy.wait(1000)

          console.log('Termina de obtener el id')
      })

      it('Profesor: Material de estudio en educ / Crear adjunto Fuera de la carpeta', () => {

          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get('#btnGroupDrop1')
          .click()

          cy.wait(1000)

          cy.get('#adjunto-btn')
          .click()

          cy.get('#file_upload_drive')
          .attachFile("Principios de seguridad de desarrollo de software.pdf")

          cy.get('#txt_nombre_drive')
          .type('Nombre cypress adjunto fuera de carpeta')

          cy.get('#txt_descriptor_drive')
          .type('Descripcion cypress adjunto')

          cy.get('#lst_siempre_drive')
          .select('Si').should('have.value', '1')

          cy.get('#lst_carpeta_destino_drive')
          .select('Sin carpeta').should('have.value', 'raiz')

          cy.get('#enviaN_drive')
          .select('No').should('have.value', '2')

          cy.get('#modal-submit')
          .click()
          
          cy.wait(1000)

          console.log('Termina de crear el adjunto fuera de la carpeta')
      })

      it("Profesor: Material de estudio en educ / Editar un adjunto Fuera de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

            cy.get('label').then((id) => {
              let array=[]
              for(let i =0; i<id.length ;i++ ){
                  let label = id[i].id
                  let label2 = label.substring(label.length - 5, label.length);
                  array.push(label2)
              }
              var m = Math.max(...array);
              cy.get("#lbl1" + m)
              .click()
            })

          cy.wait(1000)

          cy.get('#premodif')
          .click()

          cy.get("#txt_nombre_modificar_enlace").clear()
          .type("Nombre cypress adjunto fuera de carpeta editado")

          cy.get("#txt_descriptor_modificar_enlace").clear()
          .type("Descripcion cypress adjunto editado")

          cy.get('#modal-submit')
          .click()
      
          cy.wait("@reqCrearMaterial")

          console.log('Termina de Editar un elemento')
      })

      it("Profesor: Material de estudio en educ / Comprobar que si existe adjunto Fuera de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get('.archivo').invoke('text').should('have.length.gt', 0)  // gt == greater than
      
          console.log('Termina de comprobar que haya un elemento')
      })

      it("Profesor: Material de estudio en educ / Eliminar un adjunto Fuera de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

            cy.get('label').then((id) => {
              let array=[]
              for(let i =0; i<id.length ;i++ ){
                  let label = id[i].id
                  let label2 = label.substring(label.length - 5, label.length);
                  array.push(label2)
              }
              var m = Math.max(...array);
              cy.get("#lbl1" + m)
              .click()
            })


          cy.wait(1000)

          cy.get('#btn-menu-eliminar')
          .click()
          
          cy.wait(2000)

          cy.get("button").contains("Aceptar")
          .click()

          cy.wait("@reqEliminar")
          
          cy.wait("@reqEliminarMaterial")

          console.log('Termina de eliminar un elemento')
          
      })

      it('Profesor: Material de estudio en educ / Crear adjunto dentro de la carpeta', () => {

          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get('#btnGroupDrop1')
          .click()

          cy.wait(1000)

          cy.get('#adjunto-btn')
          .click()

          cy.get('#file_upload_drive')
          .attachFile("Principios de seguridad de desarrollo de software.pdf")

          cy.get('#txt_nombre_drive')
          .type('Nombre cypress adjunto dentro de carpeta')

          cy.get('#txt_descriptor_drive')
          .type('Descripcion cypress adjunto')

          cy.get('#lst_siempre_drive')
          .select('Si').should('have.value', '1')

          cy.get('#lst_carpeta_destino_drive')
          .select('Carpeta cypress')
          
          cy.get('#enviaN_drive')
          .select('No').should('have.value', '2')

          cy.get('#modal-submit')
          .click()
          
          console.log('Termina de crear el adjunto fuera de la carpeta')
      })

      it("Profesor: Material de estudio en educ / Editar un adjunto dentro de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

            cy.get('label').then((id) => {
              let array=[]
              for(let i =0; i<id.length ;i++ ){
                  let label = id[i].id
                  let label2 = label.substring(label.length - 5, label.length);
                  array.push(label2)
              }
              var m = Math.max(...array);
              cy.get("#lbl1" + m)
              .click()
            })

          cy.wait(1000)

          cy.get('#premodif')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get("#txt_nombre_modificar_enlace").clear()
          .type("Nombre cypress adjunto dentro de carpeta editado")

          cy.get("#txt_descriptor_modificar_enlace").clear()
          .type("Descripcion cypress adjunto dentro de carpeta editado")

          cy.get('#modal-submit')
          .click()
      
          cy.wait("@reqGetMaterial")

          console.log('Termina de Editar un elemento')
      })

      it("Profesor: Material de estudio en educ / Comprobar que si existe adjunto dentro de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get('.archivo').invoke('text').should('have.length.gt', 0)  // gt == greater than
      
          console.log('Termina de comprobar que haya un elemento')
      })

      it("Profesor: Material de estudio en educ / Eliminar un adjunto dentro de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

            cy.get('label').then((id) => {
              let array=[]
              for(let i =0; i<id.length ;i++ ){
                  let label = id[i].id
                  let label2 = label.substring(label.length - 5, label.length);
                  array.push(label2)
              }
              var m = Math.max(...array);
              cy.get("#lbl1" + m)
              .click()
            })


          cy.wait(1000)

          cy.get('#btn-menu-eliminar')
          .click()
          
          cy.wait(2000)

          cy.get("button").contains("Aceptar")
          .click()

          cy.wait("@reqEliminar")
          cy.wait("@reqEliminarMaterial")

          console.log('Termina de eliminar un elemento')
          
      })

      it('Profesor: Material de estudio en educ / Crear enlace fuera de la carpeta', () => {

          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get('#btnGroupDrop1')
          .click()

          cy.wait(1000)

          cy.get('#enlace-btn')
          .click()

          cy.get('#txt_nombre_enlace')
          .type('Nombre cypress enlace fuera de la carpeta')

          cy.get('#txt_descriptor_enlace')
          .type('Descripcion cypress enlace fuera de la carpeta')

          cy.get('#txt_url_enlace')
          .type('https://www.youtube.com/watch?v=HDFNjDKKO6A')

          cy.get('#lst_siempre_enlace')
          .select('Si').should('have.value', '1')

          cy.get('#lst_carpeta_destino_enlace')
          .select('Sin carpeta').should('have.value', 'raiz')

          cy.get('#envia_enlace')
          .select('No').should('have.value', '2')

          cy.get('#modal-submit')
          .click()
          
          console.log('Termina de crear el enlace fuera de la carpeta')
      })

      it("Profesor: Material de estudio en educ / Editar un enlace fuera de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

            cy.get('label').then((id) => {
              let array=[]
              for(let i =0; i<id.length ;i++ ){
                  let label = id[i].id
                  let label2 = label.substring(label.length - 5, label.length);
                  array.push(label2)
              }
              var m = Math.max(...array);
              cy.get("#lbl1" + m)
              .click()
            })

          cy.wait(1000)

          cy.get('#premodif')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get("#txt_nombre_modificar_enlace").clear()
          .type("Nombre cypress enlace fuera de la carpeta editado")

          cy.get("#txt_descriptor_modificar_enlace").clear()
          .type("Descripcion cypress enlace fuera de la carpeta editado")

          cy.get('#modal-submit')
          .click()
      
          cy.wait("@reqGetMaterial")

          console.log('Termina de Editar un elemento')
      })

      it("Profesor: Material de estudio en educ / Comprobar que si existe un enlace fuera de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get('.archivo').invoke('text').should('have.length.gt', 0)  // gt == greater than
      
          console.log('Termina de comprobar que haya un elemento')
      })


      it("Profesor: Material de estudio en educ / Eliminar un enlace fuera de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

            cy.get('label').then((id) => {
              let array=[]
              for(let i =0; i<id.length ;i++ ){
                  let label = id[i].id
                  let label2 = label.substring(label.length - 5, label.length);
                  array.push(label2)
              }
              var m = Math.max(...array);
              cy.get("#lbl1" + m)
              .click()
            })


          cy.wait(1000)

          cy.get('#btn-menu-eliminar')
          .click()
          
          cy.wait(2000)

          cy.get("button").contains("Aceptar")
          .click()

          cy.wait("@reqEliminar")
          cy.wait("@reqEliminarMaterial")

          console.log('Termina de eliminar un elemento')
          
      })

      it('Profesor: Material de estudio en educ / Crear enlace dentro de la carpeta', () => {

          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get('#btnGroupDrop1')
          .click()

          cy.wait(1000)

          cy.get('#enlace-btn')
          .click()

          cy.get('#txt_nombre_enlace')
          .type('Nombre cypress enlace dentro de la carpeta')

          cy.get('#txt_descriptor_enlace')
          .type('Descripcion cypress enlace dentro de la carpeta')

          cy.get('#txt_url_enlace')
          .type('https://www.youtube.com/watch?v=HDFNjDKKO6A')

          cy.get('#lst_siempre_enlace')
          .select('Si').should('have.value', '1')

          cy.get('#lst_carpeta_destino_enlace')
          .select('Carpeta cypress')

          cy.get('#envia_enlace')
          .select('No').should('have.value', '2')

          cy.get('#modal-submit')
          .click()
          
          console.log('Termina de crear el enlace fuera de la carpeta')
      })

      it("Profesor: Material de estudio en educ / Editar un enlace dentro de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

            cy.get('label').then((id) => {
              let array=[]
              for(let i =0; i<id.length ;i++ ){
                  let label = id[i].id
                  let label2 = label.substring(label.length - 5, label.length);
                  array.push(label2)
              }
              var m = Math.max(...array);
              cy.get("#lbl1" + m)
              .click()
            })

          cy.wait(1000)

          cy.get('#premodif')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get("#txt_nombre_modificar_enlace").clear()
          .type("Nombre cypress enlace dentro de la carpeta editado")

          cy.get("#txt_descriptor_modificar_enlace").clear()
          .type("Descripcion cypress enlace dentro de la carpeta editado")

          cy.get('#modal-submit')
          .click()
          
          cy.wait("@reqGetMaterial")

          console.log('Termina de Editar un elemento')
      })

      it("Profesor: Material de estudio en educ / Comprobar que si existe un enlace dentro de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get('.archivo').invoke('text').should('have.length.gt', 0)  // gt == greater than
      
          console.log('Termina de comprobar que haya un elemento')
      })

      it("Profesor: Material de estudio en educ / Eliminar un enlace dentro de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()
          
          cy.wait("@reqGetMaterial")

            cy.get('label').then((id) => {
              let array=[]
              for(let i =0; i<id.length ;i++ ){
                  let label = id[i].id
                  let label2 = label.substring(label.length - 5, label.length);
                  array.push(label2)
              }
              var m = Math.max(...array);
              cy.get("#lbl1" + m)
              .click()
            })


          cy.wait(1000)

          cy.get('#btn-menu-eliminar')
          .click()
          
          cy.wait(2000)

          cy.get("button").contains("Aceptar")
          .click()

          cy.wait("@reqEliminar")
          cy.wait("@reqEliminarMaterial")

          console.log('Termina de eliminar un elemento')
          
      })

      it('Profesor: Material de estudio en educ / vincular carpeta de drive fuera de carpeta', () => {

          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get('#btnGroupDrop1')
          .click()

          cy.wait(1000)

          cy.get('#carpea-drive-btn')
          .click()

          cy.get('#txt_nombre_folder_drive')
          .type('Nombre cypress enlace drive fuera de carpeta')

          cy.get('#txt_descriptor_folder_drive')
          .type('Descripcion cypress enlace de drive fuera de carpeta')

          cy.get('#txt_url_folder_drive')
          .type('https://drive.google.com/drive/folders/1X4HdOPjhGCeXuC_EO155Pa1umHTylXYq?usp=sharing')

          cy.get('#lst_siempre_folder_drive')
          .select('Si').should('have.value', '1')

          cy.get('#lst_carpeta_destino_folder_drive')
          .select('Sin carpeta').should('have.value', 'raiz')

          cy.get('#envia_folder_drive')
          .select('No').should('have.value', '2')

          cy.get('#modal-submit')
          .click()
          
          console.log('Termina de crear el enlace fuera de la carpeta')
      })

      it("Profesor: Material de estudio en educ / Editar una carpeta de drive fuera de carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

            cy.get('label').then((id) => {
              let array=[]
              for(let i =0; i<id.length ;i++ ){
                  let label = id[i].id
                  let label2 = label.substring(label.length - 5, label.length);
                  array.push(label2)
              }
              var m = Math.max(...array);
              cy.get("#lbl1" + m)
              .click()
            })

          cy.wait(1000)

          cy.get('#premodif')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get("#txt_nombre_modificar_enlace").clear()
          .type("Nombre cypress enlace de drive fuera de carpeta editado")

          cy.get("#txt_descriptor_modificar_enlace").clear()
          .type("Descripcion cypress enlace de drive fuera de carpeta editado")

          cy.get('#modal-submit')
          .click()
      
          cy.wait("@reqGetMaterial")

          console.log('Termina de Editar un elemento')
      })

      it("Profesor: Material de estudio en educ / Comprobar que si existe una carpeta de drive fuera de carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get('.archivo').invoke('text').should('have.length.gt', 0)  // gt == greater than
      
          console.log('Termina de comprobar que haya un elemento')
      })

      it("Profesor: Material de estudio en educ / Eliminar una carpeta de drive fuera de carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

            cy.get('label').then((id) => {
              let array=[]
              for(let i =0; i<id.length ;i++ ){
                  let label = id[i].id
                  let label2 = label.substring(label.length - 5, label.length);
                  array.push(label2)
              }
              var m = Math.max(...array);
              cy.get("#lbl1" + m)
              .click()
            })

          cy.wait(1000)

          cy.get('#btn-menu-eliminar')
          .click()
          
          cy.wait(2000)

          cy.get("button").contains("Aceptar")
          .click()

          cy.wait("@reqEliminar")
          cy.wait("@reqEliminarMaterial")

          console.log('Termina de eliminar un elemento')
          
      })

      it('Profesor: Material de estudio en educ / vincular carpeta de drive dentro de la carpeta', () => {

          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get('#btnGroupDrop1')
          .click()

          cy.wait(1000)

          cy.get('#carpea-drive-btn')
          .click()

          cy.get('#txt_nombre_folder_drive')
          .type('Nombre cypress enlace drive dentro de la carpeta')

          cy.get('#txt_descriptor_folder_drive')
          .type('Descripcion cypress enlace de drive dentro de la carpeta')

          cy.get('#txt_url_folder_drive')
          .type('https://drive.google.com/drive/folders/1X4HdOPjhGCeXuC_EO155Pa1umHTylXYq?usp=sharing')

          cy.get('#lst_siempre_folder_drive')
          .select('Si').should('have.value', '1')

          cy.get('#lst_carpeta_destino_folder_drive')
          .select('Carpeta cypress')

          cy.get('#envia_folder_drive')
          .select('No').should('have.value', '2')

          cy.get('#modal-submit')
          .click()
          
          console.log('Termina de crear el enlace fuera de la carpeta')
      })

      it("Profesor: Material de estudio en educ / Editar una carpeta de drive dentro de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

            cy.get('label').then((id) => {
              let array=[]
              for(let i =0; i<id.length ;i++ ){
                  let label = id[i].id
                  let label2 = label.substring(label.length - 5, label.length);
                  array.push(label2)
              }
              var m = Math.max(...array);
              cy.get("#lbl1" + m)
              .click()
            })

          cy.wait(1000)

          cy.get('#premodif')
          .click()
          
          cy.wait("@reqGetMaterial")

          cy.get("#txt_nombre_modificar_enlace").clear()
          .type("Nombre cypress enlace drive dentro de la carpeta editado")

          cy.get("#txt_descriptor_modificar_enlace").clear()
          .type("Descripcion cypress enlace drive dentro de la carpeta editado")

          cy.get('#modal-submit')
          .click()
      
          cy.wait("@reqGetMaterial")

          console.log('Termina de Editar un elemento')
      })

      it("Profesor: Material de estudio en educ / Comprobar que si existe una carpeta de drive dentro de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get('.archivo').invoke('text').should('have.length.gt', 0)  // gt == greater than
      
          console.log('Termina de comprobar que haya un elemento')
      })

      it("Profesor: Material de estudio en educ / Eliminar una carpeta de drive dentro de la carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

            cy.get('label').then((id) => {
              let array=[]
              for(let i =0; i<id.length ;i++ ){
                  let label = id[i].id
                  let label2 = label.substring(label.length - 5, label.length);
                  array.push(label2)
              }
              var m = Math.max(...array);
              cy.get("#lbl1" + m)
              .click()
            })


          cy.wait(1000)

          cy.get('#btn-menu-eliminar')
          .click()
          
          cy.wait(2000)

          cy.get("button").contains("Aceptar")
          .click()

          cy.wait("@reqEliminar")
          cy.wait("@reqEliminarMaterial")

          console.log('Termina de eliminar un elemento')
          
      })

      it("Profesor: Material de estudio en educ / Editar una carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get("#lbl1" + idCarpeta)
          .click()

          cy.wait(1000)

          cy.get('#premodif')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get("#txt_nombre_modificar_enlace").clear()
          .type("Carpeta cypress editado")

          cy.get("#txt_descriptor_modificar_enlace").clear()
          .type("Descripcion cypress editado")

          cy.get('#modal-submit')
          .click()
      
          cy.wait("@reqGetMaterial")

          console.log('Termina de Editar un elemento')
      })

      it("Profesor: Material de estudio en educ / Comprobar que si existe una carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get('.archivo').invoke('text').should('have.length.gt', 0)  // gt == greater than
      
          console.log('Termina de comprobar que haya un elemento')
      })

      it("Profesor: Material de estudio en educ / Eliminar una carpeta", () => {
          cy.get('#'+elem)
          .click()

          cy.get('li').contains('Material de estudio')
          .click()

          cy.wait("@reqGetMaterial")

          cy.get("#lbl1" + idCarpeta)
          .click()

          cy.wait(1000)

          cy.get('#btn-menu-eliminar')
          .click()
          
          cy.wait(2000)

          cy.get("button").contains("Aceptar")
          .click()

          cy.wait("@reqEliminar")
          cy.wait("@reqEliminarMaterial")
          
          console.log('Termina de eliminar un elemento')
          
      })
  })
})