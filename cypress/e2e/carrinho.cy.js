describe('Carrinho', () => {
  beforeEach(() => {
    cy.visit('/products')
  })

  it('Incluir produto no carrinho', () => {
    cy.contains('Blue Top')
      .parents('.product-image-wrapper')
      .first()
      .contains('Add to cart')
      .click()

    cy.contains('View Cart').click()

    cy.contains('Blue Top').should('be.visible')
  })
})