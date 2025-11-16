const { defineConfig } = require("cypress");
const path = require("path");
const fs = require("fs");

function loadConfigFile(env) {
  const configPath = path.resolve(__dirname, `./cypress/config/${env}.config.js`);

  if (fs.existsSync(configPath)) {
    console.log(`✅ Loading config from: ${configPath}`);
    return require(configPath);
  }
  
  console.warn(`⚠️ Config file for '${env}' not found at ${configPath}. Using default.`);
  return {};
}

module.exports = defineConfig({
  projectId: "g6phxy",
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 40000,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  reporter: "cypress-multi-reporters",
  reporterOptions: { configFile: "reporterConfig.json" },

  env: {
    envName: "Default",
    baseUrl: "https://the-internet.herokuapp.com/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      const env = config.env.configFile || process.env.CYPRESS_CONFIG_FILE || "qa";
      console.log(`🛠 Loading environment: ${env}`);

      const externalConfig = loadConfigFile(env);
      config.env = { ...config.env, ...externalConfig.env };

      if (externalConfig.env?.baseUrl) {
        config.baseUrl = externalConfig.env.baseUrl;
      }

      console.log("🔹 Final merged env:", JSON.stringify(config.env, null, 2));
      console.log("🌐 Final baseUrl:", config.baseUrl);

      return config;
    },

    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },

  video: true,
  videosFolder: "cypress/videos",
  videoCompression: false,
  trashAssetsBeforeRuns: true,
});
