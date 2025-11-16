export default class AccountPage {

  getAccountCreatedText() {
    return cy.contains('Account Created');
  }

  getContinueButton() {
    return cy.get('a[data-qa="continue-button"]');
  }

  getLoggedInAs() {
    return cy.get('a').contains('Logged in as');
  }

  getDeleteAccountButton() {
    return cy.get('a[href="/delete_account"]');
  }

  getAccountDeletedText() {
    return cy.contains('Account Deleted');
  }
}
