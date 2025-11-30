export default class ProductDetailPage {

    getProductName() { return cy.get('.product-information h2'); }
    getCategory() { return cy.get('.product-information p').contains('Category'); }
    getPrice() { return cy.get('.product-information span span'); }
    getAvailability() { return cy.get('.product-information p').contains('Availability'); }
    getCondition() { return cy.get('.product-information p').contains('Condition'); }
    getBrand() { return cy.get('.product-information p').contains('Brand'); }
    getQuantityInput() { return cy.get('#quantity'); } // input field for quantity
    getAddToCartButton() { return cy.get('button.btn.btn-default.cart'); }
    // Modal elements
    getCartModal() { return cy.get('#cartModal'); }
    getContinueShoppingButton() { return this.getCartModal().find('button.close-modal'); }
    // Model checkout
    getCheckoutModal() { return cy.get('#checkoutModal'); } // giả sử id là checkoutModal
    getContinueOnCartButton() { return cy.get('.close-checkout-modal'); }
    getProceedToCheckoutButton() { return cy.get('a.check_out'); }

}
