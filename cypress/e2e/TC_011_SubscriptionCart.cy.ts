import HomePageAction from '../pages/HomePage/HomePageAction';
import CartPageAction from '../pages/CartPage/CartPageAction';
import SubscriptionPageAction from '../pages/SubscriptionPage/SubscriptionPageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import * as allure from 'allure-js-commons';

describe('TC_011 - Verify Subscription in Cart Page', () => {
    const homePage = new HomePageAction();
    const cartAction = new CartPageAction();
    const subscriptionAction = new SubscriptionPageAction();
    const navBarAction = new NavBarAction();

    beforeEach(() => {
        cy.visit('/');
    });

    it('Should subscribe successfully via footer in Cart page', () => {
        allure.epic('General Functionality');
        allure.feature('Subscription');
        allure.story('Footer subscription from Cart page');
        allure.description('Verify subscribing via footer on the Cart page shows success message');
        allure.tags('subscription', 'cart', 'positive');

        allure.step('Verify Home page is visible', () => {
            homePage.verifyHomePageVisible();
        });

        allure.step('Open Cart page', () => {
            navBarAction.clickNavItem('cart');
        });

        allure.step('Verify Cart page is visible', () => {
            cartAction.verifyCartPageVisible();
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
