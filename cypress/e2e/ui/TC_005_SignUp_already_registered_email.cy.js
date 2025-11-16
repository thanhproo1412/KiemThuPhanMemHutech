import SignUpAction from '../../support/pages/ui/SignUpPage/SignUpAction';
import testData from '../../fixtures/testData/TC_005_SignUp_already_registered_email.json'

describe('Sign Up Test', () => {
  it('Verify SignUp with an already registered email', () => {

    // Log the environment details
    cy.log('Environment:', Cypress.env('envName'));
    cy.log('Base URL:', Cypress.env('baseUrl'));

    // Visit sign-up page
    cy.visit(Cypress.env('baseUrl') + '/sign-up');

    // Perform sign-up action
    SignUpAction.signUp(testData.name, testData.email, testData.password);

    // Verify successful sign-up
    // cy.url().should('include', '/welcome');

    cy.wait(5000); // Wait for 5 seconds

    cy.end();


  });
});
