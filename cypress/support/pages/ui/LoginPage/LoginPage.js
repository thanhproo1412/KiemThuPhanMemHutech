class LoginPage {
  static get getInputUsername() {
    return cy.get('div.sign-in input[name="email"]');
  }

  static get getInputPassword() {
    return cy.get('div.sign-in input[name="password"]');
  }

  static get getLoginBtn() {
    return cy.contains('div button', 'Sign in');
  }

  static get getErrorMessage() {
    return cy.get('div.sign-in  div.alert-error');
  }
  static get getValidateEmail() {
    return cy.get('input[name="email"] + div.form__validation-message');
  }

  static get getValidatePassword() {
    return cy.get('input[name="password"] + div.form__validation-message');
  }

  static get getForgotPasswordBtn() {
    return cy.contains('a', 'Forgot your password?');
  }

  static get getInputForgotPassword() {
    return cy.get('input.base-input__input');
  }

  static get getSendForgorPasswordBtn() {
    return cy.get('div.reset-password-email-step__footer button');
  }

  static get getSendForgorPasswordBtn() {
    return cy.get('div.reset-password-email-step__footer button');
  }

  static get getSendForgorPasswordDescription() {
    return cy.get('p.reset-password__description');
  }


}

export default LoginPage;
