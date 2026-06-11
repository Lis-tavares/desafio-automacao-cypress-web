describe('Checkout', () => {
  it('Deve validar produto incluído no carrinho na tela de pagamento', () => {
    cy.visit('/login')

    cy.get('[data-qa="login-email"]').type('testelis2026@teste.com.br')
    cy.get('[data-qa="login-password"]').type('teste123')
    cy.get('[data-qa="login-button"]').click()

    cy.contains('Logged in as').should('be.visible')

    cy.contains('Products').click()

    cy.contains('Blue Top')
      .parents('.product-image-wrapper')
      .first()
      .contains('Add to cart')
      .click()

    cy.contains('View Cart').click()

    cy.contains('Proceed To Checkout').click()

    cy.url().should('include', '/checkout')
    cy.contains('Blue Top').should('be.visible')
  })
})