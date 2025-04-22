//Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.

describe('Página de cadastro', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })  
    
    it('Verifica se o texto "AdoPet" está presente no html', () => {
        cy.title().should('eq', 'AdoPet'); //'eq' significa 'igual a'. 'O título deve ser igual a Adopet'.
    })

    //Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html.
    it('Verifica se o texto "Quem ama adota!" está presente no html', () => {
        cy.contains('Quem ama adota!');
    })

    //Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. 
    //Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.
    it('Verifica se o texto do comentário está presente no html', () => {
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!');
    })

    //Teste o login com um fluxo diferente: Visite a página principal do Adopet, clique no botão 
    // de ícone de mensagem no header e escreva nome e senha válidos na página de login.
    it('Login válido por um caminho diferente', () => {
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('emiemi@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    })
})