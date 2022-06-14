describe('RELEASE: Pruebas del Profesor de la plataforma educ', () => {

    beforeEach(() => {
        cy.iniciarSesionDev()
    })

    const arrayCursos = Cypress.env('arrayCursos');
    arrayCursos.forEach(elem => {

        it(`Profesor: Prensentacion con el curso UDC${elem} / editar y guardar`, () => {

            const txtEditor = `<H1>UDC${elem}</H1>
                <div class="m-0 contenidoNovisible"><p><span style="font-size:14px;"><span style="font-variant: normal; white-space: pre-wrap;"><span style="font-family:Arial"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Bienvenidos a la materia <strong>Bases de datos para internet</strong>, mi nombre es Victor Medina y seré su profesor. Comparto mi contacto de correo electrónico que reviso constantemente: <strong>vmedina@ucol.mx</strong>, tendremos clase los <strong>lunes</strong> y viernes de 5 a 7 pm. Utilizaremos la plataforma EDUC para recibir sus tareas y estar en comunicación. Por otra parte, usaremos Meet para nuestras sesiones en vivo: <a href="https://meet.google.com/nvp-xbao-bgn" target="_blank">https://meet.google.com/nvp-xbao-bgn</a></span></span></span></span></span></span></span></p>
                <p>&nbsp;</p>
                <p style="text-align: center;"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial"><span style="color:#000000"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Clase por meet: </span></span></span></span></span></span></p>
                <p style="text-align: center;"><a href="https://meet.google.com/nvp-xbao-bgn" target="_blank"><img alt="" src="https://educ.ucol.mx/content/8249/image/logo%20del%20meet.png" style="width: 192px; height: 192px;"></a></p>
                <div class="youtube-embed-wrapper" style="position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0px; overflow: hidden; text-align: center;"><iframe allowfullscreen="" frameborder="0" height="360" src="https://www.youtube.com/embed/fXJJ0H6RPMg" style="position:absolute;top:0;left:0;width:100%;height:100%" width="640"></iframe></div>
                <p style="text-align: center;">&nbsp;</p>
                <p style="text-align: center;">&nbsp;</p>
                <p><span style="font-size:14px;">Para iniciar vayan al apartado <a href="https://educ.ucol.mx/curso/actividades/index_admon.php" target="_blank">actividades</a> y comiencen con el trabajo de esta semana. Para cualquier duda me puede contactar a mi correo electrónico: <u><span style="color:#1155cc"><a href="mailto:vmedina@ucol.mx" style="color:#0563c1; text-decoration:underline">vmedina@ucol.mx</a></span></u></span></p>
                <div class="youtube-embed-wrapper" style="position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden">&nbsp;</div>
                <p>&nbsp;</p>
                <p>Imagen</p>
                <p><img alt="" src="https://concepto.de/wp-content/uploads/2018/04/base-de-datos-min-e1523470739502.jpg" style="width: 800px; height: 414px;" /></p>
                </div>`

            cy.get('#'+elem)
            .click()
            
            cy.get('li').contains('Presentación')
            .click()

            cy.get('button').contains('Modificar')
            .click()

            // Tiempo para que carga del editor finalice
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(1500)

            cy.get('iframe.cke_wysiwyg_frame')  // "cke_wysiwyg_frame" class is used here
                .then($frameWindow => {

                    const win = cy.state('window'); // grab the window Cypress is testing
                    const ckEditor = win.CKEDITOR;  // CKEditor has added itself to the window
                    const instances = ckEditor.instances;  // can be multiple editors on the page

                    const myEditor = Object.values(instances)
                    .filter(instance => instance.id === 'cke_1')[0]; // select the instance by id

                    // Tiempo para que carga del editor finalice
                    // eslint-disable-next-line cypress/no-unnecessary-waiting
                    cy.wait(2500)
                    
                    myEditor.setData(txtEditor); 

                })
            
            cy.get('button').contains('Guardar')
            .click()

            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(500)
            
            cy.get('#presentacion').invoke('text').should('have.length.gt', 0)  // gt == greater than
        })
    })

})