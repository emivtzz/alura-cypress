describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })  
  
  it('Preencher os campos do formulário incorretamente e mostrar mensagens para o usuário', () => {
      cy.cadastro_incorreto();
    })
  })