import testData from '../../fixtures/testData/TC_006_ForgotPassword.json';
import LoginAction from '../../support/pages/ui/LoginPage/LoginAction';

describe('Forgot password func', () => {
  it('Verify password reset functionality', () => {
    // Log the environment details
    cy.log('Environment:', Cypress.env('envName'));
    cy.log('Base URL:', Cypress.env('baseUrl'));

    // Visit the website
    cy.visit(Cypress.env('baseUrl') + '/sign-in');

    // verify forgot password
    LoginAction.forgotPasswordFunc(testData.email);

    // Verify that the user is logged in
    // cy.url().should('include', '/welcome');
    cy.wait(5000); // Wait for 5 seconds

    cy.end();


  });
});
