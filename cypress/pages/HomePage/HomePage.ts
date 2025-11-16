
import { CommonPage } from '../commonPage/commonPage';

export default class homePage {
    private common = new CommonPage();

    signupLoginBtn = 'a[href="/login"]';
    loggedInAs = (username: string) => `//*[contains(text(),'Logged in as ${username}')]`;
    deleteAccountBtn = 'a[href="/delete_account"]';

    clickSignupLogin() {
        this.common.click(this.signupLoginBtn);
    }

    verifyHomePageVisible() {
        this.common.shouldBeVisible('body'); // cơ bản verify home page load
    }

    verifyLoggedIn(username: string) {
        this.common.shouldBeVisible(this.loggedInAs(username));
    }

    clickDeleteAccount() {
        this.common.click(this.deleteAccountBtn);
    }
}
