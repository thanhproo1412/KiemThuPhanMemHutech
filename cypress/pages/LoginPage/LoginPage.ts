export default class LoginPage {

    // Elements for Signup / Registration
    getNewUserSignupText() { return cy.get('.signup-form h2'); }
    getSignupName() { return cy.get('input[data-qa="signup-name"]'); }
    getSignupEmail() { return cy.get('input[data-qa="signup-email"]'); }
    getSignupButton() { return cy.get('button[data-qa="signup-button"]'); }
    getAccountInfoTitle() { return cy.contains('Enter Account Information'); }


    // =================================== Atomic Actions ===================================
    enterSignupName(name: string) {
        this.getSignupName().type(name);
    }
    enterSignupEmail(email: string) {
        this.getSignupEmail().type(email);
    }
    clickSignupButton() {
        this.getSignupButton().should('be.visible').click();
    }

}
