describe('Carrinho', () => {
  it('Deve incluir produto no carrinho', () => {
    cy.visit('/products')

    cy.contains('Blue Top')
      .parents('.product-image-wrapper')
      .first()
      .contains('Add to cart')
      .click()

    cy.contains('View Cart').click()

    cy.contains('Blue Top').should('be.visible')
  })
})