import { defineConfig } from 'cypress';
import envConfig from './cypress/config/envConfig.json';
import { allureCypress } from "allure-cypress/reporter";

const env = (process.env.ENV || 'qa') as keyof typeof envConfig;
const configForEnv = envConfig[env];

export default defineConfig({
  e2e: {
    baseUrl: configForEnv.baseUrl,
    setupNodeEvents(on, config) {
      config.env = {
        apiUrl: configForEnv.apiUrl,
        username: configForEnv.username,
        password: configForEnv.password,
      };
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      module.exports = {
        projectId: "89fqzh",
      }
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,ts,jsx,tsx}',
    supportFile: 'cypress/support/e2e.ts'
  },
  video: false,
  screenshotOnRunFailure: true,

});
