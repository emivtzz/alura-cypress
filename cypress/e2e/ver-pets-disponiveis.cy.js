describe('Página de Pets Disponíveis', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it('Achar os pets', () => {
        cy.contains('a', 'Ver pets disponíveis para adoção').click();
    })
  })