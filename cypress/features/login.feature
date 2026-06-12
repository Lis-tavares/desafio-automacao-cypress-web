Feature: Login

  Scenario: Realizar login com sucesso
    Given que o usuário esteja na tela de login
    When informar um e-mail e senha válidos
    And clicar no botão Login
    Then o sistema deve permitir o acesso do usuário