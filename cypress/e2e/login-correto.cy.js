describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/'); 
        cy.get('[data-test="login-button"]').click();
    })

    it('Preencher os campos do formulário incorretamente e mostrar mensagens para o usuário', () => {
        cy.get('[data-test="input-loginEmail"]').type('emi@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    })
  })