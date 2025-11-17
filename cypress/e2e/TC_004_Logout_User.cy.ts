import LoginPageAction from '../pages/LoginPage/LoginPageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';

describe('Logout Flow Test', () => {
  const navAction = new NavBarAction();
  const loginAction = new LoginPageAction();

  beforeEach(() => cy.visit('/'));

  it('Should login and logout user successfully', () => {
    // Step 1-4: Navigate to login page
    navAction.clickNavItem('signupLogin');

    // Step 5-8: Login with valid credentials - verify login success
    cy.login();

    // Step 9: Click 'Logout' button - Verify user is navigated to login page
    loginAction.logout();

    // Step 10: 
    cy.contains('Login to your account').should('be.visible');
  });
});
