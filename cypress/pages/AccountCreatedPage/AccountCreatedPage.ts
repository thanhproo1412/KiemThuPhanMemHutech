// cypress/pages/AccountCreatedPage.ts
export default class AccountCreatedPage {

    // Element: "Account Created!" heading
    getAccountCreatedHeading() {
        return cy.get('[data-qa="account-created"]');
    }

    // Element: Continue button
    getContinueButton() {
        return cy.get('[data-qa="continue-button"]');
    }
}
