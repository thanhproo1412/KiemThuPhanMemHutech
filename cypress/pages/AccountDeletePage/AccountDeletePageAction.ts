import AccountCreatedPage from './AccountDeletePage';

export default class AccountDeletePageAction {
    private page: AccountCreatedPage;

    constructor() {
        this.page = new AccountCreatedPage();
    }

    // Verify "Account Created!" heading is visible
    verifyAccountDeleteVisible() {
        this.page.getAccountCreatedHeading().should('be.visible')
            .and('contain.text', 'Account Deleted!');
    }

    // Click Continue button
    clickContinueButton() {
        this.page.getContinueButton().click();
    }
}
