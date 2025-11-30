import HomePageAction from '../pages/HomePage/HomePageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import AccountDeletePageAction from '../pages/AccountDeletePage/AccountDeletePageAction';
import ProductsPageAction from '../pages/ProductsPage/ProductsPageAction';
import ProductDetailPageAction from '../pages/ProductDetailPage/ProductDetailPageAction';
import CartPageAction from '../pages/CartPage/CartPageAction';
import CheckoutPageAction from '../pages/CheckoutPage/CheckoutPageAction';
import userData from '../fixtures/TC_016_LoginBeforeCheckout/TC_016_LoginBeforeCheckout.json';
import type { UserDataType } from '../types/UserDataType';
import * as allure from 'allure-js-commons';

describe('TC_016 – Place Order: Login before Checkout', () => {
    const homePage = new HomePageAction();
    const navBarAction = new NavBarAction();
    const accountDeleteAction = new AccountDeletePageAction();
    const productsAction = new ProductsPageAction();
    const productDetailAction = new ProductDetailPageAction();
    const cartAction = new CartPageAction();
    const checkoutAction = new CheckoutPageAction();

    beforeEach(() => cy.visit('/'));

    it('Should login user, add products and place order successfully', () => {
        allure.epic('Order Management');
        allure.feature('Place Order with Logged-in User');
        allure.story('Login first then place order flow');
        allure.description('Verify user can login first, add products to cart, checkout, pay, and delete account');
        allure.tags('order', 'login', 'positive');

        // 3. Verify home page
        allure.step('Verify Home Page visible', async () => {
            homePage.verifyHomePageVisible();
        });

        // 4-6. Login
        allure.step('Login user', async () => {
            navBarAction.clickNavItem('signupLogin');
            cy.login();
        });

        // 7. Add first product to cart
        allure.step('Add first product to cart', async () => {
            navBarAction.clickNavItem('products');
            productsAction.clickFirstViewProduct();
            productDetailAction.clickAddToCart();
            productDetailAction.closeAddToCartModal();
        });

        // 8-9. Go to cart and verify
        allure.step('Go to Cart and verify', async () => {
            navBarAction.clickNavItem('cart');
            cartAction.verifyCartPageVisible();
        });

        // 10-11. Proceed to checkout
        allure.step('Proceed to Checkout', async () => {
            productDetailAction.clickProceedToCheckout();
            productDetailAction.closeCheckoutModalIfVisible();
            checkoutAction.verifyAddressDetailsVisible();
        });

        // 12-14. Place order with payment
        allure.step('Place order with payment', async () => {
            checkoutAction.enterComment('Please deliver fast');
            checkoutAction.clickPlaceOrder();
            checkoutAction.enterPaymentDetails('John Doe', '4111111111111111', '123', '12', '2025');
            checkoutAction.clickPayAndConfirm();
            checkoutAction.verifyOrderSuccessMessage();
        });

        // 15-17. Delete account
        // allure.step('Delete user account', async () => {
        //     navBarAction.clickNavItem('deleteAccount');
        //     accountDeleteAction.verifyAccountDeleteVisible();
        //     accountDeleteAction.clickContinueButton();
        // });
    });
});
