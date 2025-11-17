export default class LoginPage {

    // ================= Signup Elements =================
    getNewUserSignupText() { return cy.get('.signup-form h2'); }
    getSignupName() { return cy.get('input[data-qa="signup-name"]'); }
    getSignupEmail() { return cy.get('input[data-qa="signup-email"]'); }
    getSignupButton() { return cy.get('button[data-qa="signup-button"]'); }
    getAccountInfoTitle() { return cy.contains('Enter Account Information'); }

    // ================= Login Elements =================
    getLoginFormTitle() { return cy.get('.login-form h2'); }
    getLoginEmail() { return cy.get('input[data-qa="login-email"]'); }
    getLoginPassword() { return cy.get('input[data-qa="login-password"]'); }
    getLoginButton() { return cy.get('button[data-qa="login-button"]'); }
    getLoginErrorMessage() { return cy.contains('Your email or password is incorrect!'); }

    // ================= Signup Actions =================
    enterSignupName(name: string) {
        this.getSignupName().type(name);
    }
    enterSignupEmail(email: string) {
        this.getSignupEmail().type(email);
    }
    clickSignupButton() {
        this.getSignupButton().should('be.visible').click();
    }

    // ================= Login Actions =================
    enterLoginEmail(email: string) {
        this.getLoginEmail().type(email);
    }
    enterLoginPassword(password: string) {
        this.getLoginPassword().type(password);
    }
    clickLoginButton() {
        this.getLoginButton().should('be.visible').click();
    }
    verifyLoginFormVisible() {
        this.getLoginFormTitle().should('be.visible').and('contain.text', 'Login to your account');
    }
}
