import HomePageAction from '../pages/HomePage/HomePageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import AccountCreatedPageAction from '../pages/AccountCreatedPage/AccountCreatedPageAction';
import AccountDeletePageAction from '../pages/AccountDeletePage/AccountDeletePageAction';
import ProductsPageAction from '../pages/ProductsPage/ProductsPageAction';
import ProductDetailPageAction from '../pages/ProductDetailPage/ProductDetailPageAction';
import CartPageAction from '../pages/CartPage/CartPageAction';
import CheckoutPageAction from '../pages/CheckoutPage/CheckoutPageAction';
import userData from '../fixtures/TC_015_RegisterBeforeCheckout/TC_015_RegisterBeforeCheckout.json';
import type { UserDataType } from '../types/UserDataType';
import * as allure from 'allure-js-commons';

describe('TC_015 – Place Order: Register before Checkout', () => {
    const homePage = new HomePageAction();
    const navBarAction = new NavBarAction();
    const accountCreatedAction = new AccountCreatedPageAction();
    const accountDeleteAction = new AccountDeletePageAction();
    const productsAction = new ProductsPageAction();
    const productDetailAction = new ProductDetailPageAction();
    const cartAction = new CartPageAction();
    const checkoutAction = new CheckoutPageAction();

    beforeEach(() => cy.visit('/'));

    it('Should register user, add products and place order successfully', () => {
        allure.epic('Order Management');
        allure.feature('Place Order with Pre-registered User');
        allure.story('Register user first then place order flow');
        allure.description('Verify user can register first, add products to cart, checkout, pay, and delete account');
        allure.tags('order', 'registration', 'positive');

        // 3. Verify home page
        allure.step('Verify Home Page visible', async () => {
            homePage.verifyHomePageVisible();
        });

        // 4-6. Register user using cy.register
        allure.step('Register user', async () => {
            navBarAction.clickNavItem('signupLogin');
            cy.register(userData as unknown as UserDataType).then(email => cy.log('Registered email: ' + email));
        });

        // 7. Verify logged in
        allure.step('Verify logged in as user', async () => {
            navBarAction.verifyLoggedInAsVisible(userData.username);
        });

        // 8. Add first product to cart
        allure.step('Add first product to cart', async () => {
            navBarAction.clickNavItem('products');
            productsAction.clickFirstViewProduct();
            productDetailAction.clickAddToCart();
            productDetailAction.closeAddToCartModal();
        });

        // 9-10. Go to cart and verify
        allure.step('Go to Cart and verify', async () => {
            navBarAction.clickNavItem('cart');
            cartAction.verifyCartPageVisible();
        });

        // 11-12. Proceed to checkout
        allure.step('Proceed to Checkout', async () => {
            productDetailAction.clickProceedToCheckout();
            productDetailAction.closeCheckoutModalIfVisible();
            checkoutAction.verifyAddressDetailsVisible();
        });

        // 13-15. Place order with payment
        allure.step('Place order with payment', async () => {
            checkoutAction.enterComment('Please deliver fast');
            checkoutAction.clickPlaceOrder();
            checkoutAction.enterPaymentDetails('John Doe', '4111111111111111', '123', '12', '2025');
            checkoutAction.clickPayAndConfirm();
            checkoutAction.verifyOrderSuccessMessage();
        });

        // 16-18. Delete account
        allure.step('Delete user account', async () => {
            navBarAction.clickNavItem('deleteAccount');
            accountDeleteAction.verifyAccountDeleteVisible();
            accountDeleteAction.clickContinueButton();
        });
    });
});
