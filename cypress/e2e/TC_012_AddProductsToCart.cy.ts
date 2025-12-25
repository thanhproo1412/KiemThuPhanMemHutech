import HomePageAction from '../pages/HomePage/HomePageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import ProductsPageAction from '../pages/ProductsPage/ProductsPageAction';
import CartPageAction from '../pages/CartPage/CartPageAction';
import productData from '../fixtures/TC_012_AddProductsToCart/TC_012_AddProductsToCartData.json';
import * as allure from 'allure-js-commons';

describe('TC_012 - Add Products in Cart', () => {
    const homePage = new HomePageAction();
    const navBarAction = new NavBarAction();
    const productsAction = new ProductsPageAction();
    const cartAction = new CartPageAction();

    beforeEach(() => {
        cy.visit('/');
    });

    it('Should add products to cart and verify details', { tags: '@smoke' }, () => {
        allure.epic('E-commerce Flow');
        allure.feature('Cart Management');
        allure.story('Add multiple products to cart and validate details');
        allure.description('Adds two products to the cart then verifies both items and their details');
        allure.tags('cart', 'add-product', 'smoke');

        allure.step('Verify Home page is visible', () => {
            homePage.verifyHomePageVisible();
        });

        allure.step('Navigate to Products page', () => {
            navBarAction.clickNavItem('products');
        });

        allure.step('Add first product to cart', () => {
            productsAction.hoverAndAddToCart(0);
            productsAction.clickContinueShopping();
        });

        allure.step('Add second product to cart', () => {
            productsAction.hoverAndAddToCart(1);
        });

        allure.step('Open Cart and verify products count', () => {
            navBarAction.clickNavItem('cart');
            cartAction.verifyProductsInCart(2);
        });

        allure.step('Verify product details match fixture data', () => {
            cartAction.verifyProductDetails(0, productData.products[0].name, productData.products[0].price, productData.products[0].quantity, productData.products[0].total);
            cartAction.verifyProductDetails(1, productData.products[1].name, productData.products[1].price, productData.products[1].quantity, productData.products[1].total);
        });
    });
});
