describe('RELEASE: Pruebas del alumno de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {

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

            cy.get('#adjuntar_drive > :nth-child(4) > .col-sm-6 > .form-control')
            .select('Si').should('have.value', '1')

            //Modal de crear adjunto, select de carpeta de destino no contiene ID
            cy.get('#adjuntar_drive > :nth-child(7) > .col-sm-6 > .form-control')
            .select('Sin carpeta').should('have.value', 'raiz')

            cy.get('#enviaN_drive')
            .select('No').should('have.value', '2')

            cy.get('#modal-submit')
            .click()
            
            console.log('Termina de crear el adjunto fuera de la carpeta')
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

            //Modal de crear adjunto, select de siempre disponible no contiene ID
            cy.get('#adjuntar_drive > :nth-child(4) > .col-sm-6 > .form-control')
            .select('Si').should('have.value', '1')

            //Modal de crear adjunto, select de carpeta de destino no contiene ID
            cy.get('#adjuntar_drive > :nth-child(7) > .col-sm-6 > .form-control')
            .select('Carpeta cypress')

            //Modal de crear adjunto, select de enviar notificaciones no contiene ID
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

            cy.get('#envia-enlace')
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

            cy.get('#envia-enlace')
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

            cy.get('#envia--folder-drive')
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

            cy.get('#envia--folder-drive')
            .select('No').should('have.value', '2')

            cy.get('#modal-submit')
            .click()
            
            console.log('Termina de crear el enlace fuera de la carpeta')
        })
    })
})