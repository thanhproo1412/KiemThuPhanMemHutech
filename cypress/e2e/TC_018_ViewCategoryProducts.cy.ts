import HomePageAction from '../pages/HomePage/HomePageAction';
import * as allure from "allure-js-commons";

describe('TC_018 - View Category Products', () => {
    const homePage = new HomePageAction();

    beforeEach(() => cy.visit('/'));

    it('Should view category products correctly', () => {
        allure.epic('Category Management');
        allure.feature('View Products by Category');
        allure.story('User clicks categories and subcategories');
        allure.description('Verify that clicking category and subcategory navigates correctly');
        allure.tags('category', 'products', 'positive');

        // 3. Verify categories visible
        allure.step('Verify categories sidebar visible', async () => {
            homePage.verifyCategoriesVisible();
        });

        // 4-6. Click 'Women' category → Dress
        allure.step('Click Women category and Dress subcategory', async () => {
            homePage.clickCategory('Women');
            homePage.clickSubCategory('Women', 'Dress');
            homePage.verifyCategoryPageText('Women - Dress Products');
        });

        // 7-8. Click subcategory under Men
        allure.step('Click Men category subcategory', async () => {
            homePage.clickCategory('Men');
            homePage.clickSubCategory('Men', 'Tshirts');
            homePage.verifyCategoryPageText('Men - Tshirts Products');
        });
    });
});
