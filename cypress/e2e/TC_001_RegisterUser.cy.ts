import NavBarAction from '../pages/NavBar/NavBarAction';
import LoginPageAction from '../pages/LoginPage/LoginPageAction';
import SignupPageAction from '../pages/SignupPage/SignupPageAction';
import AccountCreatedPageAction from '../pages/AccountCreatedPage/AccountCreatedPageAction';
import utils from '../support/utils';

import userData from '../fixtures/TC_001_RegisterUserData.json';
import AccountDeletePageAction from '../pages/AccountDeletePage/AccountDeletePageAction';

const navAction = new NavBarAction();
const loginPageAction = new LoginPageAction();
const signupPageAction = new SignupPageAction();
const accountCreatedPageAction = new AccountCreatedPageAction();
const accountDeletePageAction = new AccountDeletePageAction();

describe('Registration Flow Test', () => {

  beforeEach(() => {
    //1. Launch browser -> 2. Navigate to url 'http://automationexercise.com'
    cy.visit('/');
  });

  it('Should register new user successfully', () => {

    const email = utils.generateData(userData.username) + '@yopmail.com';

    //3. Verify that home page is visible successfully
    navAction.verifyNavVisible();

    //4. Click on 'Signup / Login' button
    navAction.clickNavItem('signupLogin');

    //6. Enter name and email address -> 7. Click 'Signup' button
    loginPageAction.signup(userData.username, email);

    // 8 -> Fill data in 'Enter Account Information' section
    signupPageAction.fillPersonalInfo({
      title: userData.personalInfo.title as 'Mr' | 'Mrs',
      name: userData.username,
      password: userData.personalInfo.password,
      day: userData.personalInfo.day,
      month: userData.personalInfo.month,
      year: userData.personalInfo.year,
      newsletter: userData.personalInfo.newsletter,
      optin: userData.personalInfo.optin,
    });
    signupPageAction.fillAddressInfo({
      firstName: userData.addressInfo.firstName,
      lastName: userData.addressInfo.lastName,
      company: userData.addressInfo.company,
      address1: userData.addressInfo.address1,
      address2: userData.addressInfo.address2,
      country: userData.addressInfo.country,
      state: userData.addressInfo.state,
      city: userData.addressInfo.city,
      zipcode: userData.addressInfo.zipcode,
      mobileNumber: userData.addressInfo.mobileNumber,
    });

    //13. Click 'Create Account button'
    signupPageAction.submit();

    //14. Verify that 'ACCOUNT CREATED!' is visible
    accountCreatedPageAction.verifyAccountCreatedVisible();

    //15. Click 'Continue' button
    accountCreatedPageAction.clickContinueButton();

    //16. Verify that 'Logged in as username' is visible
    navAction.verifyLoggedInAsVisible(userData.username);

    //17. Click 'Delete Account' button
    navAction.clickNavItem('deleteAccount');

    //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    accountDeletePageAction.verifyAccountDeleteVisible();
    accountDeletePageAction.clickContinueButton();

  });

});