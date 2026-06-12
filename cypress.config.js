const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000
  },
});