import { defineConfig } from 'cypress';
import envConfig from './cypress/config/envConfig.json';
import { allureCypress } from "allure-cypress/reporter";
import { plugin as cypressGrepPlugin } from '@cypress/grep/plugin'

const env = (process.env.ENV || 'qa') as keyof typeof envConfig;
const configForEnv = envConfig[env];

export default defineConfig({
  projectId: "89fqzh",
  e2e: {
    baseUrl: configForEnv.baseUrl,
    // Increase page load timeout to tolerate slow external resources
    pageLoadTimeout: 120000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      cypressGrepPlugin(config);

      config.env = {
        apiUrl: configForEnv.apiUrl,
        username: configForEnv.username,
        password: configForEnv.password,
      };

      allureCypress(on, config, {
        resultsDir: "allure-results",
      });

      return config;
    },
    specPattern: [
      'cypress/e2e/**/*.cy.{js,ts,jsx,tsx}',
      'cypress/api/**/*.ts'
    ],
    supportFile: 'cypress/support/e2e.ts'
  },

  video: true,
  videosFolder: "cypress/videos",
  videoCompression: true,
  // videoUploadOnPasses: false, // chỉ giữ video khi FAIL
  screenshotOnRunFailure: true,
});
