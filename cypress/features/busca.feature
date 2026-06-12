Feature: Busca de produtos

  Scenario: Realizar busca por produto existente
    Given que o usuário esteja na página inicial
    When pesquisar pelo produto "Blue Top"
    Then o sistema deve exibir o produto pesquisado