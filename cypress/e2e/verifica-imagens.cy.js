describe('Verifica imagens', () => {

    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it('Verifica imagens dos animais', () =>{
        cy.get('.cards').should('be.visible');
    })
})