import HomePageAction from '../pages/HomePage/HomePageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import ProductDetailPageAction from '../pages/ProductDetailPage/ProductDetailPageAction';
import CartPageAction from '../pages/CartPage/CartPageAction';
import CheckoutPageAction from '../pages/CheckoutPage/CheckoutPageAction';
import AccountCreatedPageAction from '../pages/AccountCreatedPage/AccountCreatedPageAction';
import AccountDeletePageAction from '../pages/AccountDeletePage/AccountDeletePageAction';
import userData from '../fixtures/TC_001_RegisterUser/TC_001_RegisterUserData.json';
import * as allure from "allure-js-commons";

describe('TC_014 – Place Order: Register while Checkout', { tags: ['@smoke', '@critical'] }, () => {
    const homePage = new HomePageAction();
    const navBarAction = new NavBarAction();
    const productDetailAction = new ProductDetailPageAction();
    const cartAction = new CartPageAction();
    const checkoutAction = new CheckoutPageAction();
    const accountCreatedAction = new AccountCreatedPageAction();
    const accountDeleteAction = new AccountDeletePageAction();

    beforeEach(() => cy.visit('/'));

    it('Should register while checkout and place order successfully', () => {

        allure.epic('E-commerce Flow');
        allure.feature('Place Order');
        allure.story('Register while checkout and place order');
        allure.description('Validates complete flow of adding product to cart, registering during checkout, placing order, and deleting account.');
        allure.tags('checkout', 'register', 'order', 'delete-account');

        // 3. Verify home page
        homePage.verifyHomePageVisible();

        // 4. Add product to cart
        cy.get('.features_items .col-sm-4').first().contains('View Product').click();
        productDetailAction.setQuantity(1);
        productDetailAction.clickAddToCart();
        productDetailAction.closeAddToCartModal();

        // 5. Click 'Cart' button
        navBarAction.clickNavItem('cart');

        // 6. Verify cart page
        cartAction.verifyProductsInCart(1);

        // 7. Click Proceed To Checkout
        productDetailAction.clickProceedToCheckout();
        productDetailAction.closeCheckoutModalIfVisible();

        // 8. Click 'Register / Login' button
        navBarAction.clickNavItem('signupLogin');

        // 9. Fill all details and create account
        // 10. Verify 'ACCOUNT CREATED!' and click 'Continue'
        cy.register(userData).then(email => cy.log('Registered email: ' + email));

        // 11. Verify 'Logged in as username'
        navBarAction.verifyLoggedInAsVisible(userData.username);

        // 12. Click 'Cart' button
        navBarAction.clickNavItem('cart');

        // 13. Click 'Proceed To Checkout'
        productDetailAction.clickProceedToCheckout();

        // 14. Verify Address Details and Review Order
        checkoutAction.verifyAddressDetailsVisible();

        // 15. Enter comment and click 'Place Order'
        checkoutAction.enterComment('Please deliver between 9am-5pm');
        checkoutAction.clickPlaceOrder();

        // 16. Enter payment details
        checkoutAction.enterPaymentDetails('Test User', '4111111111111111', '123', '12', '2025');

        // 17. Click 'Pay and Confirm Order'
        checkoutAction.clickPayAndConfirm();

        // 18. Verify success message
        checkoutAction.verifyOrderSuccessMessage();

        // 19. Click 'Delete Account' button
        navBarAction.clickNavItem('deleteAccount');

        // 20. Verify 'ACCOUNT DELETED!' and click 'Continue'
        accountDeleteAction.verifyAccountDeleteVisible();
        accountDeleteAction.clickContinueButton();
    });
});
