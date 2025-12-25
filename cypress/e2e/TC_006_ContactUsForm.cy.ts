import HomePageAction from '../pages/HomePage/HomePageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import ContactUsPageAction from '../pages/ContactUsPage/ContactUsPageAction';
import contactData from '../fixtures/TC_006_ContactUsForm/TC_006_ContactUsForm.json';
import * as allure from "allure-js-commons";

describe('TC_006 - Contact Us Flow Test', { tags: ['@smoke', '@critical'] }, () => {
    const homePageAction = new HomePageAction();
    const navBarAction = new NavBarAction();
    const contactUsPageAction = new ContactUsPageAction();

    beforeEach(() => {
        cy.visit('/');
    });

    it('Should submit Contact Us form successfully and return to home page', () => {
        allure.epic('General Functionality');
        allure.feature('Contact Us');
        allure.story('Successful submission of contact form with file upload');
        allure.description('Validates the entire flow of submitting the Contact Us form, including file upload, success message verification, and navigation back to the Home Page.');
        allure.tags('contact-us', 'positive', 'file-upload');

        // 3. Verify that home page is visible successfully
        allure.step('Verify Home Page is visible', async () => {
            homePageAction.verifyHomePageVisible();
        });

        // 4. Click on 'Contact Us' button
        allure.step('Click on Contact Us button', async () => {
            navBarAction.clickNavItem('contactUs');
        });

        // 5. Verify 'GET IN TOUCH' is visible
        allure.step("Verify 'GET IN TOUCH' is visible", async () => {
            contactUsPageAction.verifyGetInTouchVisible();
        });

        // 6. Enter name, email, subject and message
        allure.step('Fill in Contact Us form details', async () => {
            contactUsPageAction.fillContactUsForm(contactData);
        });

        // 7. Upload file
        allure.step('Upload file', async () => {
            contactUsPageAction.uploadFile(contactData.fileName);
        });

        // 8. Click 'Submit' button
        allure.step("Click 'Submit' button", async () => {
            contactUsPageAction.clickSubmitButton();
        });

        // 9. Click OK button
        allure.step('Accept confirmation alert (Click OK)', async () => {
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Press OK to proceed!');
                return true;
            });
        });

        // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
        allure.step("Verify success message is visible", async () => {
            contactUsPageAction.verifySuccessMessageVisible();
        });

        // 11. Click 'Home' button and verify that landed to home page successfully
        allure.step("Click 'Home' button and verify landing on Home Page", async () => {
            contactUsPageAction.clickHomeButton();
            homePageAction.verifyHomePageVisible();
        });
    });
});