const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    envName: "prod",
    baseUrl: "https://speechanalyzer.elsaspeak.com",
    username: "prod-username",
    password: "prod-password",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
