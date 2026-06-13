describe('Busca de produtos', () => {
  beforeEach(() => {
    cy.visit('/products')
  })

  it('Realizar busca por produto existente', () => {
    cy.get('#search_product').type('Blue Top')
    cy.get('#submit_search').click()

    cy.contains('Blue Top').should('be.visible')
  })
})