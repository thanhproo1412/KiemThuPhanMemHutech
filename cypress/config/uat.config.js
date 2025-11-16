const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    envName: "uat",
    baseUrl: "https://speechanalyzer.elsaspeak.com",
    username: "uat-username",
    password: "uat-password",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
