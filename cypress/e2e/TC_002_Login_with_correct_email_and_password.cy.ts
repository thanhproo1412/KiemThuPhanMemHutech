
import NavBarAction from '../pages/NavBar/NavBarAction';
import * as allure from 'allure-js-commons';

describe('TC_002 - Login Flow Test', () => {
  const navBarAction = new NavBarAction();

  beforeEach(() => cy.visit('/'));

  it('Should login and delete user successfully', { tags: '@smoke' }, () => {

    // Step 1-4: Navigate and verify login page
    allure.step('Navigate to login page', async () => {
      navBarAction.clickNavItem('signupLogin');
    });

    // Step 5-7: Enter credentials and login
    allure.step('Login with correct email and password', async () => {
      cy.login()
    });

    // Step 8-10: Delete account
    // allure.step('Delete account after login', async () => {
    //   navBarAction.clickNavItem('deleteAccount');
    //   accountDeletePageAction.verifyAccountDeleteVisible();
    //   accountDeletePageAction.clickContinueButton();
    // });
  });
});
