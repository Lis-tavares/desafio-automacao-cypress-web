Feature: Carrinho

  Scenario: Incluir produto no carrinho
    Given que o usuário esteja na página de produtos
    When adicionar o produto "Blue Top" ao carrinho
    Then o produto deve ser exibido no carrinho