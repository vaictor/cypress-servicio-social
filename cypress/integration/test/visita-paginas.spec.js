describe('Mi primer prueba', () => {
    it('Revisa pagína UCOL', () => {
        cy.visit('https://www.ucol.mx')
        cy.wait(500)

    })

    it('Revisa pagína Educ', () => {
        cy.visit('https://educ.ucol.mx')
        cy.wait(500)

    })

    it('Revisa pagína evpraxis', () => {
        cy.visit('https://evpraxis.ucol.mx')
        cy.wait(500)

    })
    
  })