import SignupPageAction from '../pages/SignupPage/SignupPageAction';
import LoginPageAction from '../pages/LoginPage/LoginPageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import AccountCreatedPageAction from '../pages/AccountCreatedPage/AccountCreatedPageAction';
import type { UserData } from '../types/UserData';
import utils from './utils';
import { features } from 'process';


Cypress.Commands.add('register', (userData: UserData) => {
    const navAction = new NavBarAction();
    const loginPageAction = new LoginPageAction();
    const signupPageAction = new SignupPageAction();
    const accountCreatedPageAction = new AccountCreatedPageAction();

    const email = utils.generateData(userData.username) + '@yopmail.com'; // Generate unique email

    cy.allure().epic('User Management');
    cy.allure().feature('User Registration');

    cy.allure().step('Navigate to Signup/Login page', true);
    navAction.clickNavItem('signupLogin');

    cy.allure().step('Fill signup form and submit', true);
    loginPageAction.signup(userData.username, email);
    signupPageAction.fillAllInfo(userData);
    signupPageAction.submit();

    cy.allure().step('Verify account creation', true);
    accountCreatedPageAction.verifyAccountCreatedVisible();
    accountCreatedPageAction.clickContinueButton();

    cy.allure().step('Verify user logged in', true);
    navAction.verifyLoggedInAsVisible(userData.username);

    return cy.wrap(email);
});
