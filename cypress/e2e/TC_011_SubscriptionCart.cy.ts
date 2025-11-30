import HomePageAction from '../pages/HomePage/HomePageAction';
import CartPageAction from '../pages/CartPage/CartPageAction';
import SubscriptionPageAction from '../pages/SubscriptionPage/SubscriptionPageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';

describe('TC_011 – Verify Subscription in Cart Page', () => {
    const homePage = new HomePageAction();
    const cartAction = new CartPageAction();
    const subscriptionAction = new SubscriptionPageAction();
    const navBarAction = new NavBarAction();

    beforeEach(() => {
        cy.visit('/');
    });

    it('Should subscribe successfully via footer in Cart page', () => {
        // 3. Verify home page is visible
        homePage.verifyHomePageVisible();

        // 4. Click 'Cart' button
        navBarAction.clickNavItem('cart');

        // 5. Verify Cart page is visible
        cartAction.verifyCartPageVisible();

        // 6. Scroll down to footer
        subscriptionAction.scrollToFooter();

        // 7. Verify text 'SUBSCRIPTION'
        subscriptionAction.verifySubscriptionHeadingVisible();

        // 8. Enter email address and click arrow button
        subscriptionAction.enterEmailAndSubscribe('testemail@example.com');

        // 9. Verify success message
        subscriptionAction.verifySuccessMessageVisible();
    });
});
