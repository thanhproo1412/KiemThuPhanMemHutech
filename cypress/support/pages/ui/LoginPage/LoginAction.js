import LoginPage from './LoginPage.js';

class LoginAction {

    static login(Username, psw) {
        LoginPage.getInputUsername.type(Username);
        LoginPage.getInputPassword.type(psw);
        LoginPage.getLoginBtn.click();
    }

    static loginWithIncorrectPassword(Username, incorrectPsw) {
        LoginPage.getInputUsername.type(Username);
        LoginPage.getInputPassword.type(incorrectPsw);
        LoginPage.getLoginBtn.click();
        LoginPage.getErrorMessage.should('be.visible').and('contain', 'We couldn’t sign you in! Make sure you enter the correct password. If the problem persists, consider resetting your password or creating a new account.');
    }

    static loginWithBlankFields() {
        LoginPage.getLoginBtn.click();
        LoginPage.getValidateEmail.should('be.visible').and('contain', 'Email is required');
        LoginPage.getValidatePassword.should('be.visible').and('contain', 'Password is required');
    }

    static forgotPasswordFunc(email) {
        LoginPage.getForgotPasswordBtn.click();
        LoginPage.getInputForgotPassword.type(email);
        LoginPage.getSendForgorPasswordBtn.click();
        LoginPage.getSendForgorPasswordDescription.should('be.visible').and('contain', 'An email has been sent. Follow the directions to reset your password. The link will be expired in one hour.');

    }
    
    static loginWithSpecialCharacters(specialCharEmail, password) {
        LoginPage.getInputUsername.type(specialCharEmail);
        LoginPage.getInputPassword.type(password);
        LoginPage.getLoginBtn.click();
        LoginPage.getValidateEmail.should('be.visible').and('contain', 'Email is invalid');

    }


}

export default LoginAction;
