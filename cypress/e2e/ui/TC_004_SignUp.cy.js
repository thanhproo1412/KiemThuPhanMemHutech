import SignUpAction from '../../support/pages/ui/SignUpPage/SignUpAction';
import { generateRandom20DigitNumber } from '../../support/supportFunction/Random';

describe('Sign Up Test', () => {
  it('Verify SignUp with valid details', () => {
    // Log environment details
    cy.log('Environment:', Cypress.env('envName'));
    cy.log('Base URL:', Cypress.env('baseUrl'));

    // Generate random ID
    const random_id = generateRandom20DigitNumber();
    const testDataFilename = 'cypress/fixtures/testData/TC_004_SignUp.json';
    const expectedFilename = 'cypress/fixtures/expectedData/TC_004_SignUp.json';

    // Read test data, update it, and write it back -> Soo i can using file expectedData to compare data if needed
    cy.readFile(testDataFilename, 'utf8').then((fileData) => {
      fileData.name = "AutoTest" + random_id;
      fileData.email = "AutoTest" + random_id + '@yopmail.com';

      // Update expected data file first
      return cy.writeFile(expectedFilename, fileData).then(() => {
        cy.log('Updated Expected Data File Successfully');
        return cy.writeFile(testDataFilename, fileData);
      });
    }).then(() => {
      cy.log('Updated Test Data File Successfully');

      // Load updated test data dynamically
      cy.fixture('testData/TC_004_SignUp').then((testData) => {
        // Visit sign-up page
        cy.visit(Cypress.env('baseUrl') + '/sign-up');

        // Perform sign-up action
        SignUpAction.signUp(testData.name, testData.email, testData.password);


        cy.window().then((win) => {
          const accessToken = win.sessionStorage.getItem('accessToken'); // Use the exact key from DevTools

          if (accessToken) {
            cy.log(`Access Token Before: ${accessToken}`);  // Cypress UI log
          } else {
            cy.log('No Access Token Found in sessionStorage!');
          }
        });

        // Verify successful sign-up
        cy.url().should('include', '/welcome');

        cy.wait(5000); // Wait for 5 seconds

        cy.end();

      });
    });
  });
});
