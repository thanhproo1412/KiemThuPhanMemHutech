import SignupPageAction from '../pages/SignupPage/SignupPageAction';
import LoginPageAction from '../pages/LoginPage/LoginPageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import AccountCreatedPageAction from '../pages/AccountCreatedPage/AccountCreatedPageAction';
import AccountDeletePageAction from '../pages/AccountDeletePage/AccountDeletePageAction';
import type { UserData } from '../types/UserData';
import utils from './utils';
import userData from '../fixtures/TC_001_RegisterUser/TC_001_RegisterUserData.json';
import * as allure from "allure-js-commons";

Cypress.Commands.add('register', (userData: UserData) => {
    const navAction = new NavBarAction();
    const loginPageAction = new LoginPageAction();
    const signupPageAction = new SignupPageAction();
    const accountCreatedPageAction = new AccountCreatedPageAction();
    const accountDeletePageAction = new AccountDeletePageAction();

    const email = utils.generateData(userData.username) + '@yopmail.com';

    // Allure metadata
    allure.epic('User Management');
    allure.feature('User Registration and Deletion');
    allure.story('Register and delete account flow');
    allure.description('Validates user registration followed by account deletion');
    allure.tags('registration', 'delete-account', 'positive');

    // Steps
    allure.step('Register user', async () => {
        navAction.clickNavItem('signupLogin');
        loginPageAction.signup(userData.username, email);
        signupPageAction.fillAllInfo(userData);
        signupPageAction.submit();
        accountCreatedPageAction.verifyAccountCreatedVisible();
        accountCreatedPageAction.clickContinueButton();
        navAction.verifyLoggedInAsVisible(userData.username);
    });

    // Optional: delete account step inside command
    // allure.step('Delete account', async () => {
    //     navAction.clickNavItem('deleteAccount');
    //     accountDeletePageAction.verifyAccountDeleteVisible();
    //     accountDeletePageAction.clickContinueButton();
    // });

    return cy.wrap(email);
});
