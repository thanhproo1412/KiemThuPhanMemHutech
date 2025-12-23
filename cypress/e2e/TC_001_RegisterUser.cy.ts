import NavBarAction from '../pages/NavBar/NavBarAction';
import AccountCreatedPageAction from '../pages/AccountCreatedPage/AccountCreatedPageAction';
import AccountDeletePageAction from '../pages/AccountDeletePage/AccountDeletePageAction';
import userData from '../fixtures/TC_001_RegisterUser/TC_001_RegisterUserData.json';
import type { UserDataType } from '../types/UserDataType';
import * as allure from "allure-js-commons";

describe('Registration Flow Test', () => {
  const navBarAction = new NavBarAction();
  const accountCreatedPageAction = new AccountCreatedPageAction();
  const accountDeletePageAction = new AccountDeletePageAction();

  beforeEach(() => cy.visit('/'));

  it('Should register and delete user successfully', () => {
    allure.epic('User Management');
    allure.feature('User Registration and Deletion');
    allure.story('Register and delete account flow');
    allure.description('Validates user registration followed by account deletion');
    allure.tags('registration', 'delete-account', 'positive');

    allure.step('Register user', async () => {
      cy.register(userData as unknown as UserDataType).then(email => cy.log('Registered email: ' + email));
    });

    allure.step('Delete account', async () => {
      navBarAction.clickNavItem('deleteAccount');
      accountDeletePageAction.verifyAccountDeleteVisible();
      accountDeletePageAction.clickContinueButton();
    });
  });
});
