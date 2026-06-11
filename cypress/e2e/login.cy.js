describe('Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('/login')

    cy.get('[data-qa="login-email"]').type('testelis2026@teste.com.br')
    cy.get('[data-qa="login-password"]').type('teste123')
    cy.get('[data-qa="login-button"]').click()

    cy.contains('Logged in as').should('be.visible')
  })
})