import LoginPage from "./LoginPage";

export default class LoginPageAction {

    private page: LoginPage;

    constructor() {
        this.page = new LoginPage();
    }

    signup(name: string, email: string) {
        this.page.enterSignupName(name);
        this.page.enterSignupEmail(email);
        this.page.clickSignupButton();
    }
}
