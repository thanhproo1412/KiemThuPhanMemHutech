import HomePageAction from '../pages/HomePage/HomePageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import ProductDetailPageAction from '../pages/ProductDetailPage/ProductDetailPageAction';
import CartPageAction from '../pages/CartPage/CartPageAction';
import CheckoutPageAction from '../pages/CheckoutPage/CheckoutPageAction';
import AccountCreatedPageAction from '../pages/AccountCreatedPage/AccountCreatedPageAction';
import AccountDeletePageAction from '../pages/AccountDeletePage/AccountDeletePageAction';
import userData from '../fixtures/TC_001_RegisterUser/TC_001_RegisterUserData.json';
import * as allure from "allure-js-commons";

describe('TC_014 - Place Order: Register while Checkout', { tags: ['@smoke', '@critical'] }, () => {
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

        allure.step('Verify Home page is visible', () => {
            homePage.verifyHomePageVisible();
        });

        allure.step('Add a product to cart', () => {
            cy.get('.features_items .col-sm-4').first().contains('View Product').click();
            productDetailAction.setQuantity(1);
            productDetailAction.clickAddToCart();
            productDetailAction.closeAddToCartModal();
        });

        allure.step('Open Cart and verify product present', () => {
            navBarAction.clickNavItem('cart');
            cartAction.verifyProductsInCart(1);
        });

        allure.step('Proceed to checkout (open checkout modal if required)', () => {
            productDetailAction.clickProceedToCheckout();
            productDetailAction.closeCheckoutModalIfVisible();
        });

        allure.step('Register while on checkout', () => {
            navBarAction.clickNavItem('signupLogin');
            cy.register(userData).then(email => cy.log('Registered email: ' + email));
            navBarAction.verifyLoggedInAsVisible(userData.username);
        });

        allure.step('Return to cart and proceed to checkout', () => {
            navBarAction.clickNavItem('cart');
            productDetailAction.clickProceedToCheckout();
        });

        allure.step('Verify address details and place order', () => {
            checkoutAction.verifyAddressDetailsVisible();
            checkoutAction.enterComment('Please deliver between 9am-5pm');
            checkoutAction.clickPlaceOrder();
        });

        allure.step('Enter payment details and confirm order', () => {
            checkoutAction.enterPaymentDetails('Test User', '4111111111111111', '123', '12', '2025');
            checkoutAction.clickPayAndConfirm();
            checkoutAction.verifyOrderSuccessMessage();
        });

        allure.step('Delete test account and verify deletion', () => {
            navBarAction.clickNavItem('deleteAccount');
            accountDeleteAction.verifyAccountDeleteVisible();
            accountDeleteAction.clickContinueButton();
        });
    });
});
