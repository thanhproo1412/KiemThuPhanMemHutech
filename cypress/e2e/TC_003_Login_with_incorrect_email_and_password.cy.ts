import NavBarAction from '../pages/NavBar/NavBarAction';
import LoginPageAction from '../pages/LoginPage/LoginPageAction';
import * as allure from 'allure-js-commons';

describe('TC_003 - Login Flow Test - Negative', () => {
  const navBarAction = new NavBarAction();
  const loginPageAction = new LoginPageAction();

  beforeEach(() => cy.visit('/'));

  it('Should NOT login with incorrect email and password', () => {
    allure.epic('User Management');
    allure.feature('User Login');
    allure.story('Login with invalid credentials');
    allure.description('Validates that user cannot login with incorrect username or password');
    allure.tags('login', 'negative', 'invalid-credentials');

    allure.step('Navigate to login page', async () => {
      navBarAction.clickNavItem('signupLogin');
    });

    allure.step('Enter incorrect email and password', async () => {
      loginPageAction.login('wrong_email@test.com', 'wrongpassword123');
    });

    allure.step('Verify error message is displayed', async () => {
      loginPageAction.verifyLoginErrorVisible();
    });
  });
});
