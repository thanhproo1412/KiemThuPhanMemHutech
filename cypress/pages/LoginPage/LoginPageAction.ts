import LoginPage from "./LoginPage";
import NavBarAction from "./../NavBar/NavBarAction";

export default class LoginPageAction {

    private page: LoginPage;
    private navAction: NavBarAction;

    constructor() {
        this.page = new LoginPage();
        this.navAction = new NavBarAction();
    }

    signup(name: string, email: string) {
        this.page.enterSignupName(name);
        this.page.enterSignupEmail(email);
        this.page.clickSignupButton();
    }

    login(email: string, password: string) {
        this.page.enterLoginEmail(email);
        this.page.enterLoginPassword(password);
        this.page.clickLoginButton();
    }

    verifyLoginErrorVisible() {
        this.page.getLoginErrorMessage().should('be.visible');
        this.page.getLoginErrorMessage().should('contain.text', 'Your email or password is incorrect!');
    }

    logout() {
        this.navAction.clickNavItem('logout');
        this.verifyLoginPageVisible();
    }

    verifyLoginPageVisible() {
        this.page.verifyLoginFormVisible();
        this.page.getLoginEmail().should('be.visible');
        this.page.getLoginPassword().should('be.visible');
        this.page.getLoginButton().should('be.visible');
    }

}
