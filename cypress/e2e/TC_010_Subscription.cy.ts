import HomePageAction from '../pages/HomePage/HomePageAction';
import SubscriptionPageAction from '../pages/SubscriptionPage/SubscriptionPageAction';

describe('TC_010 – Verify Subscription in Footer', () => {
    const homePage = new HomePageAction();
    const subscriptionAction = new SubscriptionPageAction();

    beforeEach(() => {
        cy.visit('/');
    });

    it('Should subscribe successfully via footer', () => {
        // 3. Verify home page is visible
        homePage.verifyHomePageVisible();

        // 4. Scroll down to footer
        subscriptionAction.scrollToFooter();

        // 5. Verify text 'SUBSCRIPTION'
        subscriptionAction.verifySubscriptionHeadingVisible();

        // 6. Enter email address and click arrow button
        subscriptionAction.enterEmailAndSubscribe('testemail@example.com');

        // 7. Verify success message
        subscriptionAction.verifySuccessMessageVisible();
    });
});
