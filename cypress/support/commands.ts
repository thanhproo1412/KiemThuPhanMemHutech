import SignupPageAction from '../pages/SignupPage/SignupPageAction';
import LoginPageAction from '../pages/LoginPage/LoginPageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import AccountCreatedPageAction from '../pages/AccountCreatedPage/AccountCreatedPageAction';
import type { UserDataType } from '../types/UserDataType.ts';
import utils from './utils';
import * as allure from "allure-js-commons";
import usersData from '../fixtures/users.json';

// REGISTER
Cypress.Commands.add('register', (UserDataType: UserDataType): Cypress.Chainable<string> => {
    const navBarAction = new NavBarAction();
    const loginPageAction = new LoginPageAction();
    const signupPageAction = new SignupPageAction();
    const accountCreatedPageAction = new AccountCreatedPageAction();

    const email = utils.generateData(UserDataType.username) + '@yopmail.com';

    allure.epic('User Management');
    allure.feature('User Registration and Deletion');
    allure.story('Register and delete account flow');
    allure.description('Validates user registration followed by account deletion');
    allure.tags('registration', 'delete-account', 'positive');

    allure.step('Register user', async () => {
        navBarAction.clickNavItem('signupLogin');
        loginPageAction.signup(UserDataType.username, email);
        signupPageAction.fillAllInfo(UserDataType);
        signupPageAction.submit();
        accountCreatedPageAction.verifyAccountCreatedVisible();
        accountCreatedPageAction.clickContinueButton();
        navBarAction.verifyLoggedInAsVisible(UserDataType.username);
    });

    return cy.wrap(email);
});

// LOGIN
Cypress.Commands.add('login', (): Cypress.Chainable<string> => {
    const env = Cypress.env('ENV') || 'qa';
    const navBarAction = new NavBarAction();
    const loginPageAction = new LoginPageAction();

    const user: UserDataType = usersData[env].defaultUser;

    allure.step(`Login as ${user.username}`, async () => {
        navBarAction.clickNavItem('signupLogin');
        loginPageAction.login(user.email!, user.password);
        navBarAction.verifyLoggedInAsVisible(user.username);
    });

    return cy.wrap(user.username);
});