import NavBarAction from '../pages/NavBar/NavBarAction';
import LoginPageAction from '../pages/LoginPage/LoginPageAction';
import HomePageAction from '../pages/HomePage/HomePageAction';
import * as allure from "allure-js-commons";

const existingUserData = {
  name: 'existing_user',
  email: 'existing_user@yopmail.com',
};

describe('Registration Flow Test', () => {
  const homePageAction = new HomePageAction();
  const navBarAction = new NavBarAction();
  const loginPageAction = new LoginPageAction();

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should display error when registering with an existing email', () => {
    allure.epic('User Management');
    allure.feature('User Registration');
    allure.story('Attempt to register with existing email');
    allure.description('Validates that an error message appears when attempting to register with an already registered email address.');
    allure.tags('registration', 'negative', 'existing-email');

    // 3. Verify that home page is visible successfully
    allure.step('Verify Home Page is visible', async () => {
      homePageAction.verifyHomePageVisible();
    });

    // 4. Click on 'Signup / Login' button
    allure.step('Click on Signup / Login button', async () => {
      navBarAction.clickNavItem('signupLogin');
    });

    // 5. Verify 'New User Signup!' is visible
    allure.step("Verify 'New User Signup!' is visible", async () => {
      loginPageAction.verifyNewUserSignupVisible();
    });

    // 6. Enter name and already registered email address
    // 7. Click 'Signup' button
    allure.step('Enter existing email and click Signup', async () => {
      loginPageAction.signup(existingUserData.name, existingUserData.email);
    });

    // 8. Verify error 'Email Address already exist!' is visible
    allure.step("Verify error 'Email Address already exist!' is visible", async () => {
      loginPageAction.verifyEmailAlreadyExistErrorVisible();
    });
  });
});