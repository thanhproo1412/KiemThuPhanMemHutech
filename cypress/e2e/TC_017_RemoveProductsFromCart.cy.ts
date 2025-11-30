import HomePageAction from '../pages/HomePage/HomePageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import ProductsPageAction from '../pages/ProductsPage/ProductsPageAction';
import ProductDetailPageAction from '../pages/ProductDetailPage/ProductDetailPageAction';
import CartPageAction from '../pages/CartPage/CartPageAction';
import * as allure from 'allure-js-commons';

describe('TC_017 – Remove Products From Cart', () => {
    const homePage = new HomePageAction();
    const navBarAction = new NavBarAction();
    const productsAction = new ProductsPageAction();
    const productDetailAction = new ProductDetailPageAction();
    const cartAction = new CartPageAction();

    beforeEach(() => cy.visit('/'));

    it('Should add products to cart and remove them successfully', () => {
        allure.epic('Cart Management');
        allure.feature('Remove Products From Cart');
        allure.story('Add products and remove them from the cart');
        allure.description('Verify that products can be removed from cart successfully');
        allure.tags('cart', 'remove-product', 'positive');

        // 3. Verify home page
        allure.step('Verify home page is visible', async () => {
            homePage.verifyHomePageVisible();
        });

        // 4. Add first product
        navBarAction.clickNavItem('products');
        productsAction.clickViewProduct(0);
        productDetailAction.clickAddToCart();
        productDetailAction.closeAddToCartModal();

        // 4b. Add second product
        navBarAction.clickNavItem('products'); // back to products page
        productsAction.clickViewProduct(1);
        productDetailAction.clickAddToCart();
        productDetailAction.closeAddToCartModal();

        // 5-6. Go to cart and verify
        allure.step('Go to Cart and verify', async () => {
            navBarAction.clickNavItem('cart');
            cartAction.verifyCartPageVisible();
            cartAction.verifyProductsInCart(2);
        });

        // 7. Remove first product
        allure.step('Remove first product from cart', async () => {
            cartAction.deleteProductByIndex(0);
        });

        // 8. Verify one product remains
        allure.step('Verify cart has 1 product remaining', async () => {
            cartAction.verifyProductsInCart(1);
        });

        // Optional: Remove last product to check empty cart
        allure.step('Remove last product and verify cart is empty', async () => {
            cartAction.deleteProductByIndex(0);
            cartAction.verifyCartIsEmpty();
        });
    });
});
