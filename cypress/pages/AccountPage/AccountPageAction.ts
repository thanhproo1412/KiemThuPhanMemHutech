import AccountPage from "./AccountPage";

export default class AccountPageAction {
  private page = new AccountPage();

  verifyAccountCreated() {
    this.page.getAccountCreatedText().should('be.visible');
  }

  clickContinue() {
    this.page.getContinueButton().click();
  }

  verifyLoggedIn(username: string) {
    this.page.getLoggedInAs().should('contain.text', username);
  }

  clickDeleteAccount() {
    this.page.getDeleteAccountButton().click();
  }

  verifyAccountDeleted() {
    this.page.getAccountDeletedText().should('be.visible');
  }
}
