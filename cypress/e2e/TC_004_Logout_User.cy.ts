import LoginPageAction from '../pages/LoginPage/LoginPageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import * as allure from 'allure-js-commons';

describe('TC_004 - Logout Flow Test', () => {
  const navBarAction = new NavBarAction();
  const loginAction = new LoginPageAction();

  beforeEach(() => cy.visit('/'));

  it('Should login and logout user successfully', () => {
    allure.epic('User Management');
    allure.feature('User Authentication');
    allure.story('Logout flow');
    allure.description('Validates that a logged-in user can logout and is returned to the login page');
    allure.tags('login', 'logout', 'positive');

    allure.step('Navigate to Login page', () => {
      navBarAction.clickNavItem('signupLogin');
    });

    allure.step('Login with valid credentials', () => {
      cy.login();
    });

    allure.step('Logout the user', () => {
      loginAction.logout();
    });

    allure.step('Verify Login page is visible after logout', () => {
      cy.contains('Login to your account').should('be.visible');
    });
  });
});
