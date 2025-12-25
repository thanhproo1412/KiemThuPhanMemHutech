import HomePageAction from '../pages/HomePage/HomePageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import ProductDetailPageAction from '../pages/ProductDetailPage/ProductDetailPageAction';
import CartPageAction from '../pages/CartPage/CartPageAction';
import * as allure from 'allure-js-commons';

describe('TC_013 - Verify Product quantity in Cart', () => {

    const homePage = new HomePageAction();
    const navBarAction = new NavBarAction();
    const productDetailAction = new ProductDetailPageAction();
    const cartAction = new CartPageAction();

    beforeEach(() => {
        cy.visit('/');
    });

    it('Should add product with exact quantity to cart', () => {
        allure.epic('E-commerce Flow');
        allure.feature('Cart Management');
        allure.story('Product quantity in cart');
        allure.description('Add a product with quantity 4 and verify the cart shows quantity correctly');
        allure.tags('cart', 'quantity', 'positive');

        allure.step('Verify Home page is visible', () => {
            homePage.verifyHomePageVisible();
        });

        allure.step('Open Product detail for first product', () => {
            navBarAction.clickNavItem('products'); // or click from home if available
            cy.get('.features_items .col-sm-4').first().contains('View Product').click();
        });

        allure.step('Verify product detail page is visible', () => {
            productDetailAction.verifyProductDetailsVisible();
        });

        allure.step('Set product quantity to 4', () => {
            productDetailAction.setQuantity(4);
        });

        allure.step('Add product to cart and close modal', () => {
            productDetailAction.clickAddToCart();
            productDetailAction.closeAddToCartModal();
        });

        allure.step('Open Cart page and verify quantity', () => {
            navBarAction.clickNavItem('cart');
            cartAction.verifyProductQuantity(0, '4');
        });
    });
});
