export default class LoginPage {
    // -----------------------
    // Login Form
    // -----------------------
    getLoginForm = () => cy.get('div.login-form');
    getLoginEmail = () => cy.get('input[data-qa="login-email"]');
    getLoginPassword = () => cy.get('input[data-qa="login-password"]');
    getLoginButton = () => cy.get('button[data-qa="login-button"]');

    // Atomic Actions - Login
    enterLoginEmail(email: string) {
        this.getLoginEmail().clear().type(email);
    }

    enterLoginPassword(password: string) {
        this.getLoginPassword().clear().type(password);
    }

    clickLoginButton() {
        this.getLoginButton().click();
    }

    // -----------------------
    // Signup Form
    // -----------------------
    getSignupForm = () => cy.get('div.signup-form');
    getSignupName = () => cy.get('input[data-qa="signup-name"]');
    getSignupEmail = () => cy.get('input[data-qa="signup-email"]');
    getSignupButton = () => cy.get('button[data-qa="signup-button"]');

    // Atomic Actions - Signup
    enterSignupName(name: string) {
        this.getSignupName().clear().type(name);
    }

    enterSignupEmail(email: string) {
        this.getSignupEmail().clear().type(email);
    }

    clickSignupButton() {
        this.getSignupButton().click();
    }

    signup(name: string, email: string) {
        this.enterSignupName(name);
        this.enterSignupEmail(email);
        this.clickSignupButton();
    }

    verifySignupFormVisible() {
        this.getSignupForm().should('be.visible');
    }
}
