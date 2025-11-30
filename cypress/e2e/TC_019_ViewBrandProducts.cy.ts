import HomePageAction from '../pages/HomePage/HomePageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import * as allure from 'allure-js-commons';

describe('TC_019 – View & Cart Brand Products', () => {
    const homePageAction = new HomePageAction();
    const navBarAction = new NavBarAction();

    beforeEach(() => cy.visit('/'));

    it('Should view brand products and navigate between brands', () => {
        allure.epic('Brand Management');
        allure.feature('View Brand Products');
        allure.story('Navigate brand pages and verify products');
        allure.description('Verify that user can view products by brands');
        allure.tags('brand', 'products', 'navigation', 'positive');

        // 3. Click on 'Products' button
        allure.step('Go to Products page', async () => {
            navBarAction.clickNavItem('products');
            cy.url().should('include', '/products');
        });

        // 4. Verify brands are visible
        allure.step('Verify brands visible', async () => {
            homePageAction.verifyBrandsVisible();
        });

        // 5-6. Click first brand and verify page
        allure.step('Click first brand and verify products', async () => {
            homePageAction.clickBrand('Polo');
            cy.url().should('include', '/brand_products/Polo');
            cy.get('.features_items .col-sm-4').should('have.length.greaterThan', 0);
        });

        // 7-8. Click second brand and verify
        allure.step('Click second brand and verify products', async () => {
            homePageAction.clickBrand('H&M');
            cy.url().should('include', '/brand_products/H&M');
            cy.get('.features_items .col-sm-4').should('have.length.greaterThan', 0);
        });
    });
});
