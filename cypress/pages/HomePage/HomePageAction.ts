import HomePage from './HomePage';

export default class HomePageAction {
    private page: HomePage;

    constructor() {
        this.page = new HomePage();
    }

    verifyHomePageVisible() {
        cy.title().should('include', 'Automation Exercise');
        this.page.getLogo().should('be.visible');
        this.page.getHomeNavButton().should('be.visible')
            .and('contain.text', 'Home');
        this.page.getSliderCarousel().should('be.visible');
    }

    verifyCategoriesVisible() {
        this.page.getCategoriesSidebar().should('be.visible');
    }

    clickCategory(categoryName: string) {
        this.page.getCategoryLink(categoryName).click();
    }

    clickSubCategory(parentCategory: string, subCategory: string) {
        this.page.getSubCategoryLink(parentCategory, subCategory).click();
    }

    verifyCategoryPageText(expectedText: string) {
        this.page.getCategoryTitle().should('contain.text', expectedText);
    }
    
        // Verify brands list is visible
    verifyBrandsVisible() {
        this.page.getBrandsList().should('be.visible');
    }

    // Click brand by name
    clickBrand(brandName: string) {
        this.page.getBrandLink(brandName).click();
    }
}
