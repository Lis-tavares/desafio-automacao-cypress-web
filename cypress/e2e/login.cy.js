describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Realizar login com sucesso', () => {
    cy.get('[data-qa="login-email"]').type('testelis2026@teste.com.br')
    cy.get('[data-qa="login-password"]').type('teste123')
    cy.get('[data-qa="login-button"]').click()

    cy.contains('Logged in as').should('be.visible')
  })
})