import HomePageAction from "../pages/HomePage/HomePageAction";
import NavBarAction from "../pages/NavBar/NavBarAction";
import ProductsPageAction from "../pages/ProductsPage/ProductsPageAction";
import * as allure from 'allure-js-commons';

describe("TC_009 - Search Product Functionality", () => {

    const homePage = new HomePageAction();
    const navBarAction = new NavBarAction();
    const productsAction = new ProductsPageAction();

    beforeEach(() => {
        cy.visit("/");
    });

    it("Should search a product and verify search results", { tags: '@smoke' }, () => {

        allure.epic('E-commerce Flow');
        allure.feature('Search');
        allure.story('Search products and validate results');
        allure.description('Search for a product by name and verify the results page and items');
        allure.tags('search', 'products', 'smoke');

        allure.step('Verify Home Page is visible', () => {
            homePage.verifyHomePageVisible();
        });

        allure.step('Navigate to Products page', () => {
            navBarAction.clickNavItem("products");
        });

        allure.step('Verify All Products page is visible', () => {
            productsAction.verifyAllProductsPageVisible();
        });

        allure.step('Search for product "dress"', () => {
            productsAction.searchProduct("dress");
        });

        allure.step('Verify SEARCHED PRODUCTS title is visible', () => {
            productsAction.verifySearchTitleVisible();
        });

        allure.step('Verify searched products are displayed', () => {
            productsAction.verifySearchedProductsVisible();
        });
    });
});
