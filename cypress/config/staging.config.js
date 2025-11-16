const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    envName: "staging",
    baseUrl: "https://speechanalyzer.elsaspeak.com",
    username: "staging-username",
    password: "staging-password",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
