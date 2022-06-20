describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {

        let idCarpeta = ''

        it('Profesor: Material de estudio en educ / Crear una carpeta', () => {

            cy.get('#'+elem)
            .click()

            cy.get('li').contains('Material de estudio')
            .click()

            cy.wait(1000)

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
            
            console.log('Termina de crear la carpeta')
        })

        it("Profesor:  Material de estudio en educ / Obtener id de carpeta", () => {
            cy.get('#'+elem)
            .click()

            cy.get('li').contains('Material de estudio')
            .click()

            cy.wait(5000)

              cy.get('label').then((id) => {
                console.log(id)
                console.log(id[0].id)
                let array=[]
                for(let i =0; i<id.length ;i++ ){
                    let label = id[i].id
                    let label2 = label.substring(label.length - 5, label.length);
                    console.log(label2)
                    array.push(label2)
                }
                console.log(array)
                var m = Math.max(...array);
                console.log(m)
                idCarpeta = m
                console.log(idCarpeta)
              })
        
            cy.wait(1000)
            console.log('Termina de obtener el id')
            
        })

        it('Profesor: Material de estudio en educ / Crear adjunto Fuera de la carpeta', () => {

            cy.get('#'+elem)
            .click()

            cy.get('li').contains('Material de estudio')
            .click()

            cy.wait(1000)

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
            
            console.log('Termina de crear el adjunto fuera de la carpeta')
        })

        it("Profesor: Material de estudio en educ / Editar un adjunto Fuera de la carpeta", () => {
            cy.get('#'+elem)
            .click()

            cy.get('li').contains('Material de estudio')
            .click()

            cy.wait(5000)

              cy.get('label').then((id) => {
                console.log(id)
                console.log(id[0].id)
                let array=[]
                for(let i =0; i<id.length ;i++ ){
                    let label = id[i].id
                    let label2 = label.substring(label.length - 5, label.length);
                    console.log(label2)
                    array.push(label2)
                }
                console.log(array)
                var m = Math.max(...array);
                console.log(m)
                cy.get("#lbl" + m).click({force: true})
              })

            cy.wait(1000)

            cy.get('#premodif')
            .click()

            cy.get("#txt_nombre_drive").clear()
            .type("Nombre cypress adjunto fuera de carpeta editado")

            cy.get("#txt_descriptor_drive").clear()
            .type("Descripcion cypress adjunto editado")

            cy.get('#modal-submit')
            .click()
        
            cy.wait(1000)

            console.log('Termina de Editar un elemento')
        })


        it("Profesor: Material de estudio en educ / Comprobar que si existe adjunto Fuera de la carpeta", () => {
            cy.get('#'+elem)
            .click()

            cy.get('li').contains('Material de estudio')
            .click()

            cy.get('.archivo').invoke('text').should('have.length.gt', 0)  // gt == greater than
        
            console.log('Termina de comprobar que haya un elemento')
        })


        it("Profesor: Material de estudio en educ / Eliminar un anuncio", () => {
            cy.get('#'+elem)
            .click()

            cy.get('li').contains('Material de estudio')
            .click()

            cy.wait(5000)

              cy.get('label').then((id) => {
                console.log(id)
                console.log(id[0].id)
                let array=[]
                for(let i =0; i<id.length ;i++ ){
                    let label = id[i].id
                    let label2 = label.substring(label.length - 5, label.length);
                    console.log(label2)
                    array.push(label2)
                }
                console.log(array)
                var m = Math.max(...array);
                console.log(m)
                cy.get("#lbl" + m).click({force: true})
              })


            cy.wait(1000)

            cy.get('#menus > :nth-child(3) > .btn')
            .click()
            
            cy.wait(1000)

            cy.get(".bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary")
            .click()

            cy.wait(1000)

            console.log('Termina de eliminar un elemento')
            
        })

        it('Profesor: Material de estudio en educ / Crear adjunto dentro de la carpeta', () => {

            cy.get('#'+elem)
            .click()

            cy.get('li').contains('Material de estudio')
            .click()

            cy.wait(1000)

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

        it('Profesor: Material de estudio en educ / Crear enlace fuera de la carpeta', () => {

            cy.get('#'+elem)
            .click()

            cy.get('li').contains('Material de estudio')
            .click()

            cy.wait(1000)

            cy.get('#btnGroupDrop1')
            .click()

            cy.wait(1000)

            cy.get('#enlace-btn')
            .click()

            cy.get('#txt_nombre_enlace')
            .type('Nombre cypress enlace')

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

        it('Profesor: Material de estudio en educ / Crear enlace dentro de la carpeta', () => {

            cy.get('#'+elem)
            .click()

            cy.get('li').contains('Material de estudio')
            .click()

            cy.wait(1000)

            cy.get('#btnGroupDrop1')
            .click()

            cy.wait(1000)

            cy.get('#enlace-btn')
            .click()

            cy.get('#txt_nombre_enlace')
            .type('Nombre cypress enlace')

            cy.get('#txt_descriptor_enlace')
            .type('Descripcion cypress enlace fuera de la carpeta')

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

        it('Profesor: Material de estudio en educ / vincular carpeta de drive fuera de carpeta', () => {

            cy.get('#'+elem)
            .click()

            cy.get('li').contains('Material de estudio')
            .click()

            cy.wait(1000)

            cy.get('#btnGroupDrop1')
            .click()

            cy.wait(1000)

            cy.get('#carpea-drive-btn')
            .click()

            cy.get('#txt_nombre_folder_drive')
            .type('Nombre cypress enlace drive')

            cy.get('#txt_descriptor_folder_drive')
            .type('Descripcion cypress enlace de drive')

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

        it('Profesor: Material de estudio en educ / vincular carpeta de drive dentro de la carpeta', () => {

            cy.get('#'+elem)
            .click()

            cy.get('li').contains('Material de estudio')
            .click()

            cy.wait(1000)

            cy.get('#btnGroupDrop1')
            .click()

            cy.wait(1000)

            cy.get('#carpea-drive-btn')
            .click()

            cy.get('#txt_nombre_folder_drive')
            .type('Nombre cypress enlace drive')

            cy.get('#txt_descriptor_folder_drive')
            .type('Descripcion cypress enlace de drive')

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
    })
})