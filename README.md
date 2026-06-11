# Desafio de Automação Web - Cypress

## Objetivo

Automatizar os cenários solicitados para o site Automation Exercise utilizando Cypress e JavaScript.

---

## Tecnologias Utilizadas

* JavaScript
* Cypress
* Node.js

---

## Cenários Automatizados

### Login

* Realizar login com usuário válido.

### Busca de Produto

* Realizar busca por produto existente.

### Carrinho de Compras

* Adicionar produto ao carrinho.
* Validar produto incluído no carrinho.

### Checkout

* Validar produto incluído na tela de pagamento.

---

## Dados de Teste

Usuário utilizado para execução dos testes:

**E-mail:** [testelis2026@teste.com.br](mailto:testelis2026@teste.com.br)

**Senha:** teste123

---

## Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

* Node.js
* NPM (instalado juntamente com o Node.js)

---

## Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd desafio-automacao-cypress-web
```

Instale as dependências:

```bash
npm install
```

---

## Execução dos Testes

Abrir o Cypress em modo interativo:

```bash
npx cypress open
```

Executar todos os testes em modo headless:

```bash
npx cypress run
```

---

## Estrutura do Projeto

```text
cypress
├── e2e
│   ├── login.cy.js
│   ├── busca.cy.js
│   ├── carrinho.cy.js
│   └── checkout.cy.js
├── fixtures
└── support

cypress.config.js
package.json
README.md
```

---

## Cenários Atendidos

Conforme solicitado no desafio, foram automatizados os seguintes fluxos:

✔ Login

✔ Realizar busca de produto

✔ Incluir produto no carrinho

✔ Validar produto incluído no carrinho na tela de pagamento

---

## Observações

O desafio original previa a utilização de Cucumber para escrita dos cenários em BDD.

Durante o desenvolvimento foi realizada a configuração e execução dos cenários utilizando Cypress e Cucumber. Entretanto, devido a incompatibilidades de versão entre os pacotes utilizados e o Cypress, a implementação final foi consolidada em Cypress com JavaScript puro, preservando integralmente a cobertura dos requisitos solicitados no desafio.

Os cenários automatizados contemplam todos os requisitos funcionais solicitados para o desafio Web e podem ser executados normalmente através do Cypress.

---

## Autor

Lislaine Tavares dos Santos

Analista de Qualidade de Software (QA)
