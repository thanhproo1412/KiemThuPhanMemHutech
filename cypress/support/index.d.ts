/// <reference types="cypress" />
/// <reference path="./commands.ts" />


declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Custom command to register a user
         * @example cy.register(userData)
         */
        register(userData: import('../types/UserDataType').UserData): Chainable<string>;
        login(): Chainable<string>;
        deleteAccount(): Chainable<void>;
    }
}
