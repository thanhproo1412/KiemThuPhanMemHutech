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

    logout() {
        this.navAction.clickNavItem('logout');
        this.verifyLoginPageVisible();
    }

    verifyLoginErrorVisible() {
        this.page.getLoginErrorMessage().should('be.visible');
        this.page.getLoginErrorMessage().should('contain.text', 'Your email or password is incorrect!');
    }

    verifyLoginPageVisible() {
        this.page.verifyLoginFormVisible();
        this.page.getLoginEmail().should('be.visible');
        this.page.getLoginPassword().should('be.visible');
        this.page.getLoginButton().should('be.visible');
    }

    verifyEmailAlreadyExistErrorVisible() {
        this.page.getEmailAlreadyExistError().should('be.visible')
            .and('contain.text', 'Email Address already exist!');
    }

    verifyNewUserSignupVisible() {
        this.page.getNewUserSignupHeading().should('be.visible')
            .and('contain.text', 'New User Signup!');
    }

}
