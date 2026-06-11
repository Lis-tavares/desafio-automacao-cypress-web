describe('Busca de produtos', () => {
  it('Deve realizar busca por produto existente', () => {
    cy.visit('/products')

    cy.get('#search_product').type('Blue Top')
    cy.get('#submit_search').click()

    cy.contains('Blue Top').should('be.visible')
  })
})