import testData from '../../fixtures/testData/TC_002_Login_invalid_credentials.json';
import LoginAction from '../../support/pages/ui/LoginPage/LoginAction';

describe('Login', () => {
  it('Verify login with invalid credentials', () => {
    // Log the environment details
    cy.log('Environment:', Cypress.env('envName'));
    cy.log('Base URL:', Cypress.env('baseUrl'));

    // Visit the website
    cy.visit(Cypress.env('baseUrl') + '/sign-in');

    // Login
    LoginAction.loginWithIncorrectPassword(testData.username, testData.password);

    // Verify that the user is logged in
    // cy.url().should('include', '/welcome');
    cy.wait(5000); // Wait for 5 seconds

    cy.end();


  });
});
