import NavBarAction from '../pages/NavBar/NavBarAction';
import AccountCreatedPageAction from '../pages/AccountCreatedPage/AccountCreatedPageAction';
import AccountDeletePageAction from '../pages/AccountDeletePage/AccountDeletePageAction';
import userData from '../fixtures/TC_001_RegisterUser/TC_001_RegisterUserData.json';
import type { UserData } from '../types/UserData';

describe('Registration Flow Test', () => {
  const navAction = new NavBarAction();
  const accountCreatedPageAction = new AccountCreatedPageAction();
  const accountDeletePageAction = new AccountDeletePageAction();

  beforeEach(() => {
    // 1. Launch browser -> 2. Navigate to url
    cy.visit('/');
  });

  it('Should register and delete user successfully', () => {
    // 3-16: Register user using custom command
    cy.register(userData as unknown as UserData).then((email) => {
      cy.log('Registered email: ' + email);
    });

    // 17. Delete account
    navAction.clickNavItem('deleteAccount');

    // 18. Verify delete success and continue
    accountDeletePageAction.verifyAccountDeleteVisible();
    accountDeletePageAction.clickContinueButton();
  });
});
