export default class HomePage {

    getLogo() {
        return cy.get('.logo img[alt="Website for automation practice"]');
    }

    getSliderCarousel() {
        return cy.get('#slider-carousel');
    }

    getHomeNavButton() {
        return cy.get('.shop-menu ul.nav.navbar-nav li a[href="/"]');
    }

    // Categories sidebar
    getCategoriesSidebar() {
        return cy.get('.left-sidebar');
    }

    getCategoryLink(categoryName: string) {
        return this.getCategoriesSidebar().contains(categoryName);
    }

    getSubCategoryLink(parentCategory: string, subCategory: string) {
        return cy.get('.left-sidebar')
            .contains('a', parentCategory) // find <a> with category name
            .closest('.panel-default')      // go up to panel
            .find('.panel-collapse')        // then find the panel-collapse inside
            .contains(subCategory);         // find sub-category link
    }

    getCategoryTitle() {
        return cy.get('.features_items h2.title'); // text như 'WOMEN - TOPS PRODUCTS'
    }
    // Brands container
    getBrandsList() {
        return cy.get('.brands-name ul.nav li a');
    }

    // Brand link by name
    getBrandLink(brandName: string) {
        return this.getBrandsList().contains(brandName);
    }
}
