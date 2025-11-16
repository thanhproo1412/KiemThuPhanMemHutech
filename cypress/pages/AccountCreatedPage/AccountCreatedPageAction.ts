// cypress/pages/AccountCreatedPageAction.ts
import AccountCreatedPage from './AccountCreatedPage';

export default class AccountCreatedPageAction {
    private page: AccountCreatedPage;

    constructor() {
        this.page = new AccountCreatedPage();
    }

    // Verify "Account Created!" heading is visible
    verifyAccountCreatedVisible() {
        this.page.getAccountCreatedHeading().should('be.visible')
            .and('contain.text', 'Account Created!');
    }

    // Click Continue button
    clickContinueButton() {
        this.page.getContinueButton().click();
    }
}
