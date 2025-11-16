import SignUpPage from './SignUpPage.js';

class SignUpAction {

    static signUp(name, email, password) {

        SignUpPage.getBtnLetCreateAccount.click();
        SignUpPage.getInputFullName.type(name);
        SignUpPage.getInputEmail.type(email);
        SignUpPage.getInputPassword.type(password);
        SignUpPage.getBtnSignUp.click();

    }

    static signUpalreadyRegisteredEmail(name, email, password) {

        SignUpPage.getBtnLetCreateAccount.click();
        SignUpPage.getInputFullName.type(name);
        SignUpPage.getInputEmail.type(email);
        SignUpPage.getInputPassword.type(password);
        SignUpPage.getErrorMessage().should('be.visible').and('contain', 'This email is already linked to an existing account. Please sign in by using the same email address and password.'); 

    }


}

export default SignUpAction;
