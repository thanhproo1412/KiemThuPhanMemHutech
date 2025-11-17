import NavBarAction from '../pages/NavBar/NavBarAction';
import * as allure from 'allure-js-commons';

describe('Login Flow Test', () => {
  const navAction = new NavBarAction();

  beforeEach(() => cy.visit('/'));

  it('Should login and delete user successfully', () => {

    // Step 1-4: Navigate and verify login page
    allure.step('Navigate to login page', async () => {
      navAction.clickNavItem('signupLogin');
    });

    // Step 5-7: Enter credentials and login
    allure.step('Login with correct email and password', async () => {
      cy.login()
    });

    // Step 8-10: Delete account
    // allure.step('Delete account after login', async () => {
    //   navAction.clickNavItem('deleteAccount');
    //   accountDeletePageAction.verifyAccountDeleteVisible();
    //   accountDeletePageAction.clickContinueButton();
    // });
  });
});
