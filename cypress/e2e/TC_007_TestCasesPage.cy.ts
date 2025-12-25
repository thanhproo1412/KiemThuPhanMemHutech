import HomePageAction from '../pages/HomePage/HomePageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import TestCasesPageAction from '../pages/TestCasesPage/TestCasesPageAction';
import * as allure from "allure-js-commons";

describe('TC_007 - Navigate to Test Cases Page', () => {
    const homePageAction = new HomePageAction();
    const navBarAction = new NavBarAction();
    const testCasesAction = new TestCasesPageAction();

    beforeEach(() => {
        cy.visit('/');
    });

    it('Should navigate to Test Cases page successfully', () => {
        allure.epic('General Functionality');
        allure.feature('Test Cases Page');
        allure.story('Navigation to Test Cases page');
        allure.description('Validates that the Test Cases page is accessible through the navigation menu.');
        allure.tags('navigation', 'test-cases', 'positive');

        // 3. Verify home page is visible
        allure.step('Verify Home Page is visible', async () => {
            homePageAction.verifyHomePageVisible();
        });

        // 4. Click on Test Cases button
        allure.step("Click 'Test Cases' button", async () => {
            navBarAction.clickNavItem('testCases');
        });

        // 5. Verify user landed on test cases page
        allure.step("Verify Test Cases page title is visible", async () => {
            testCasesAction.verifyTestCasesPageVisible();
        });
    });
});
