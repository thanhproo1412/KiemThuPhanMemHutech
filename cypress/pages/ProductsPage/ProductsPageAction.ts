import ProductsPage from "./ProductsPage";

export default class ProductsPageAction {
    private page = new ProductsPage();

    verifyAllProductsPageVisible() {
        this.page.getAllProductsTitle()
            .should('be.visible')
            .and('contain.text', 'All Products');   // Text đúng của website
    }

    verifyProductsListVisible() {
        this.page.getProductsList().should('be.visible').and('have.length.greaterThan', 0);
    }

    clickFirstViewProduct() {
        this.page.getFirstViewProductButton().click();
    }

    searchProduct(productName: string) {
        this.page.getSearchInput().type(productName);
        this.page.getSearchButton().click();
    }

    verifySearchTitleVisible() {
        this.page.getSearchTitle()
            .should("be.visible")
            .and("contain.text", "Searched Products");
    }

    verifySearchedProductsVisible() {
        this.page.getSearchedProductItems()
            .should("have.length.greaterThan", 0)
            .each(($el) => {
                cy.wrap($el).should("be.visible");
            });
    }

    clickContinueShopping() {
        this.page.getContinueShoppingButton().click();
    }

    hoverAndAddToCart(index: number) {
        this.page.getProductsList().eq(index).trigger('mouseover');
        this.page.getAddToCartButton(index).click();
    }

}
