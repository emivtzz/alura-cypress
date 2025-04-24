describe('Página de login', () => {

    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="login-button"]').click();
      cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login',{
        statusCode:400, }).as('stubPost')
    })

    it('Verifica mensagem de falha no login', () => {
      cy.login_incorreto2();
    })

    /*it('Deve preencher os campos do login incorretamente e exibir mensagens de erro ao usuário na página', () => {
      cy.login_incorreto();
    })*/

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
      cy.login('emi@gmail.com', 'Senha123');
      cy.wait('@stubPost');
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })
})