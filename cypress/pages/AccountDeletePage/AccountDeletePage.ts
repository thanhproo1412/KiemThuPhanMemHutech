export default class AccountDeletePage {

    // Element: "Account Created!" heading
    getAccountCreatedHeading() {
        return cy.get('[data-qa="account-deleted"]');
    }

    // Element: Continue button
    getContinueButton() {
        return cy.get('[data-qa="continue-button"]');
    }
}
