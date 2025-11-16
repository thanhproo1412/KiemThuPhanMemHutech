import { defineConfig } from 'cypress';
import envConfig from './cypress/config/envConfig.json';

// Default env will be 'qa' if not specified
const env = (process.env.ENV || 'qa') as keyof typeof envConfig;
const configForEnv = envConfig[env];

export default defineConfig({
    e2e: {
        supportFile: false,
        baseUrl: configForEnv.baseUrl,
        setupNodeEvents(on, config) {
            config.env = {
                apiUrl: configForEnv.apiUrl,
                username: configForEnv.username,
                password: configForEnv.password
            };
            return config;
        },
    },
});
