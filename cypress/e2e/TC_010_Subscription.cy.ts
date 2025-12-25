import HomePageAction from '../pages/HomePage/HomePageAction';
import SubscriptionPageAction from '../pages/SubscriptionPage/SubscriptionPageAction';
import * as allure from 'allure-js-commons';

describe('TC_010 - Verify Subscription in Footer', () => {
    const homePage = new HomePageAction();
    const subscriptionAction = new SubscriptionPageAction();

    beforeEach(() => {
        cy.visit('/');
    });

    it('Should subscribe successfully via footer', () => {
        allure.epic('General Functionality');
        allure.feature('Subscription');
        allure.story('Footer subscription flow');
        allure.description('Verify user can subscribe via footer and see success message');
        allure.tags('subscription', 'footer', 'positive');

        allure.step('Verify Home page is visible', () => {
            homePage.verifyHomePageVisible();
        });

        allure.step('Scroll to footer', () => {
            subscriptionAction.scrollToFooter();
        });

        allure.step("Verify 'SUBSCRIPTION' heading is visible", () => {
            subscriptionAction.verifySubscriptionHeadingVisible();
        });

        allure.step('Enter email and submit subscription', () => {
            subscriptionAction.enterEmailAndSubscribe('testemail@example.com');
        });

        allure.step('Verify subscription success message', () => {
            subscriptionAction.verifySuccessMessageVisible();
        });
    });
});
