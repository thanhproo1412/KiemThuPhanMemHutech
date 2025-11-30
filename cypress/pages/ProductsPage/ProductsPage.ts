export default class ProductsPage {

    getAllProductsTitle() { return cy.get('.title.text-center'); }
    getProductsList() { return cy.get('.features_items .col-sm-4'); }
    getFirstViewProductButton() { return cy.get('.features_items .col-sm-4').first().contains('View Product'); }
    getSearchInput() { return cy.get("#search_product"); }
    getSearchButton() { return cy.get("#submit_search"); }
    getSearchTitle() { return cy.get("h2.title.text-center"); }
    getSearchedProductItems() { return cy.get(".features_items .col-sm-4"); }
    getAddToCartButton(index: number) { return this.getProductsList().eq(index).contains('Add to cart'); }
    getContinueShoppingButton() { return cy.get('.btn-success.close-modal'); }
    getViewCartButton() { return cy.get('a[href="/view_cart"]'); }

}
