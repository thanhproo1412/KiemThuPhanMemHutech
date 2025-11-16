/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Custom command to register a user
         * @example cy.register(userData)
         */
        register(userData: import('../types/UserData').UserData): Chainable<string>;
        login(email: string, password: string): Chainable<void>;
        deleteAccount(): Chainable<void>;
    }
}
