Feature: Checkout

  Scenario: Validar produto incluído no carrinho na tela de pagamento
    Given que o usuário possua o produto "Blue Top" no carrinho
    When acessar a tela de pagamento
    Then o produto deve ser exibido corretamente no resumo do pedido