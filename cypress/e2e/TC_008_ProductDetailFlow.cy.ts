import HomePageAction from "../pages/HomePage/HomePageAction";
import NavBarAction from "../pages/NavBar/NavBarAction";
import ProductsPageAction from "../pages/ProductsPage/ProductsPageAction";
import ProductDetailPageAction from "../pages/ProductDetailPage/ProductDetailPageAction";
import * as allure from 'allure-js-commons';

describe("TC_008 - Verify All Products & Product Detail Page", () => {

    const homePage = new HomePageAction();
    const navBarAction = new NavBarAction();
    const productsAction = new ProductsPageAction();
    const productDetailAction = new ProductDetailPageAction();

    beforeEach(() => {
        cy.visit("/");
    });

    it("Should navigate to Products page and verify product details", () => {

        allure.epic('E-commerce Flow');
        allure.feature('Product Browsing');
        allure.story('View Products and Product Details');
        allure.description('Navigate to All Products page, open a product detail and verify details are visible');
        allure.tags('products', 'product-detail', 'positive');

        allure.step('Verify Home page is visible', () => {
            homePage.verifyHomePageVisible();
        });

        allure.step('Open Products page from navigation', () => {
            navBarAction.clickNavItem("products");
        });

        allure.step('Verify All Products page and list are visible', () => {
            productsAction.verifyAllProductsPageVisible();
            productsAction.verifyProductsListVisible();
        });

        allure.step('Open first product detail', () => {
            productsAction.clickFirstViewProduct();
        });

        allure.step('Verify product detail information is displayed', () => {
            productDetailAction.verifyProductDetailsVisible();
        });
    });
});
