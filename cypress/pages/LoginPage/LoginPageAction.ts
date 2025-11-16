import LoginPage from "./LoginPage";

export default class LoginPageAction {

    private page: LoginPage;

    constructor() {
        this.page = new LoginPage();
    }
    login(email: string, password: string) {
        this.page.enterLoginEmail(email);
        this.page.enterLoginPassword(password);
        this.page.clickLoginButton();
    }

    signup(name: string, email: string) {
        this.page.enterSignupName(name);
        this.page.enterSignupEmail(email);
        this.page.clickSignupButton();
    }
}
