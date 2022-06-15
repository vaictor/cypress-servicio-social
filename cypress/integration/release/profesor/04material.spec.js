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

            cy.get('#txt_nombre')
            .type('Carpeta cypress adjunto')

            //Modal de crear carpeta, descripcion no contiene ID
            cy.get('#folder-new > :nth-child(2) > .col-sm-6 > .form-control')
            .type('Descripcion cypress adjunto')

            //Modal de crear carpeta, select de siempre disponible no contiene ID
            cy.get('#folder-new > :nth-child(3) > .col-sm-6 > .form-control')
            .select('Si').should('have.value', '1')

            //Modal de crear carpeta, select de carpeta de destino no contiene ID
            cy.get('#folder-new > :nth-child(6) > .col-sm-6 > .form-control')
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

            cy.get('.dropdown-menu > :nth-child(2) > a')
            .click()

            //Falta ver donde colocar el archivo
            //cy.get('#file_upload_drive')
            //.attachFile("app_icon.png")

             //Modal de crear adjunto, input de nombre no contiene ID
            cy.get('#adjuntar_drive > :nth-child(2) > .col-sm-6 > .form-control')
            .type('Nombre cypress adjunto fuera de carpeta')

             //Modal de crear adjunto, input de descripcion no contiene ID
            cy.get('#adjuntar_drive > :nth-child(3) > .col-sm-6 > .form-control')
            .type('Descripcion cypress adjunto')

            //Modal de crear adjunto, select de siempre disponible no contiene ID
            cy.get('#adjuntar_drive > :nth-child(4) > .col-sm-6 > .form-control')
            .select('Si').should('have.value', '1')

            //Modal de crear adjunto, select de carpeta de destino no contiene ID
            cy.get('#adjuntar_drive > :nth-child(7) > .col-sm-6 > .form-control')
            .select('Sin carpeta').should('have.value', 'raiz')

            //Modal de crear adjunto, select de enviar notificaciones no contiene ID
            cy.get(' #enviaN_drive')
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

            cy.get('.dropdown-menu > :nth-child(2) > a')
            .click()

            //Falta ver donde colocar el archivo
            //cy.get('#file_upload_drive')
            //.attachFile("app_icon.png")

             //Modal de crear adjunto, input de nombre no contiene ID
            cy.get('#adjuntar_drive > :nth-child(2) > .col-sm-6 > .form-control')
            .type('Nombre cypress adjunto dentro de carpeta')

             //Modal de crear adjunto, input de descripcion no contiene ID
            cy.get('#adjuntar_drive > :nth-child(3) > .col-sm-6 > .form-control')
            .type('Descripcion cypress adjunto')

            //Modal de crear adjunto, select de siempre disponible no contiene ID
            cy.get('#adjuntar_drive > :nth-child(4) > .col-sm-6 > .form-control')
            .select('Si').should('have.value', '1')

            //Modal de crear adjunto, select de carpeta de destino no contiene ID
            cy.get('#adjuntar_drive > :nth-child(7) > .col-sm-6 > .form-control')
            .select('Carpeta cypress adjunto')

            //Modal de crear adjunto, select de enviar notificaciones no contiene ID
            cy.get(' #enviaN_drive')
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

            cy.get('.open > .dropdown-menu > :nth-child(3) > a')
            .click()

             //Modal de crear enlace, input de nombre no contiene ID
            cy.get('#enlace > :nth-child(1) > .col-sm-6 > .form-control')
            .type('Nombre cypress enlace')

             //Modal de crear adjunto, input de descripcion no contiene ID
            cy.get('#enlace > :nth-child(2) > .col-sm-6 > .form-control')
            .type('Descripcion cypress enlace fuera de la carpeta')

             //Modal de crear adjunto, input de enlace no contiene ID
            cy.get('#enlace > :nth-child(3) > .col-sm-6 > .form-control')
            .type('https://www.youtube.com/watch?v=HDFNjDKKO6A')

            //Modal de crear adjunto, select de siempre disponible no contiene ID
            cy.get('#enlace > :nth-child(4) > .col-sm-6 > .form-control')
            .select('Si').should('have.value', '1')

            //Modal de crear adjunto, select de carpeta de destino no contiene ID
            cy.get('#enlace > :nth-child(7) > .col-sm-6 > .form-control')
            .select('Sin carpeta').should('have.value', 'raiz')

            //Modal de crear adjunto, select de enviar notificaciones no contiene ID
            cy.get('#enlace > :nth-child(8) > .col-sm-6 > #enviaN')
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

            cy.get('.open > .dropdown-menu > :nth-child(3) > a')
            .click()

             //Modal de crear enlace, input de nombre no contiene ID
            cy.get('#enlace > :nth-child(1) > .col-sm-6 > .form-control')
            .type('Nombre cypress enlace')

             //Modal de crear adjunto, input de descripcion no contiene ID
            cy.get('#enlace > :nth-child(2) > .col-sm-6 > .form-control')
            .type('Descripcion cypress enlace fuera de la carpeta')

             //Modal de crear adjunto, input de enlace no contiene ID
            cy.get('#enlace > :nth-child(3) > .col-sm-6 > .form-control')
            .type('https://www.youtube.com/watch?v=HDFNjDKKO6A')

            //Modal de crear adjunto, select de siempre disponible no contiene ID
            cy.get('#enlace > :nth-child(4) > .col-sm-6 > .form-control')
            .select('Si').should('have.value', '1')

            //Modal de crear adjunto, select de carpeta de destino no contiene ID
            cy.get('#enlace > :nth-child(7) > .col-sm-6 > .form-control')
            .select('Carpeta cypress adjunto')

            //Modal de crear adjunto, select de enviar notificaciones no contiene ID
            cy.get('#enlace > :nth-child(8) > .col-sm-6 > #enviaN')
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

            cy.get('.dropdown-menu > :nth-child(4) > a')
            .click()

             //Modal de crear enlace, input de nombre no contiene ID
            cy.get('#drive > :nth-child(1) > .col-sm-6 > .form-control')
            .type('Nombre cypress enlace drive')

             //Modal de crear adjunto, input de descripcion no contiene ID
            cy.get('#drive > :nth-child(2) > .col-sm-6 > .form-control')
            .type('Descripcion cypress enlace de drive')

             //Modal de crear adjunto, input de enlace no contiene ID
            cy.get('#drive > :nth-child(3) > .col-sm-6 > .form-control')
            .type('https://drive.google.com/drive/folders/1X4HdOPjhGCeXuC_EO155Pa1umHTylXYq?usp=sharing')

            //Modal de crear adjunto, select de siempre disponible no contiene ID
            cy.get('#drive > :nth-child(4) > .col-sm-6 > .form-control')
            .select('Si').should('have.value', '1')

            //Modal de crear adjunto, select de carpeta de destino no contiene ID
            cy.get('#drive > :nth-child(7) > .col-sm-6 > .form-control')
            .select('Sin carpeta').should('have.value', 'raiz')

            //Modal de crear adjunto, select de enviar notificaciones no contiene ID
            cy.get('#drive > :nth-child(8) > .col-sm-6 > #enviaN')
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

            cy.get('.dropdown-menu > :nth-child(4) > a')
            .click()

             //Modal de crear enlace, input de nombre no contiene ID
            cy.get('#drive > :nth-child(1) > .col-sm-6 > .form-control')
            .type('Nombre cypress enlace drive')

             //Modal de crear adjunto, input de descripcion no contiene ID
            cy.get('#drive > :nth-child(2) > .col-sm-6 > .form-control')
            .type('Descripcion cypress enlace de drive')

             //Modal de crear adjunto, input de enlace no contiene ID
            cy.get('#drive > :nth-child(3) > .col-sm-6 > .form-control')
            .type('https://drive.google.com/drive/folders/1X4HdOPjhGCeXuC_EO155Pa1umHTylXYq?usp=sharing')

            //Modal de crear adjunto, select de siempre disponible no contiene ID
            cy.get('#drive > :nth-child(4) > .col-sm-6 > .form-control')
            .select('Si').should('have.value', '1')

            //Modal de crear adjunto, select de carpeta de destino no contiene ID
            cy.get('#drive > :nth-child(7) > .col-sm-6 > .form-control')
            .select('Carpeta cypress adjunto')

            //Modal de crear adjunto, select de enviar notificaciones no contiene ID
            cy.get('#drive > :nth-child(8) > .col-sm-6 > #enviaN')
            .select('No').should('have.value', '2')

            cy.get('#modal-submit')
            .click()
            
            console.log('Termina de crear el enlace fuera de la carpeta')
        })
    })
})