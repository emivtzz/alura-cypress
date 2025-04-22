describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click(); 
})
  
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.get('[data-test="input-name"]').type('Emilly Vetorazzi');   //vai pegar (get) o nome que está no input e vai digitar (type) alguma coisa
    cy.get('[data-test="input-email"]').type('emi@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})