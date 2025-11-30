import ProductDetailPage from "./ProductDetailPage";

export default class ProductDetailPageAction {
    private page = new ProductDetailPage();

    verifyProductDetailsVisible() {
        this.page.getProductName().should('be.visible');
        this.page.getCategory().should('be.visible');
        this.page.getPrice().should('be.visible');
        this.page.getAvailability().should('be.visible');
        this.page.getCondition().should('be.visible');
        this.page.getBrand().should('be.visible');
    }

    setQuantity(quantity: number) {
        this.page.getQuantityInput().clear().type(quantity.toString());
    }

    clickAddToCart() {
        // Intercept the GET request sent when adding product to cart
        cy.intercept('GET', /add_to_cart\/\d+\?quantity=\d+/).as('addToCart');

        // Click the Add to Cart button
        this.page.getAddToCartButton().click();

        // Wait for the request to complete and verify status code is 200
        cy.wait('@addToCart').its('response.statusCode').should('eq', 200);
    }

    closeAddToCartModal() {
        this.page.getCartModal().should('be.visible');
        this.page.getContinueShoppingButton().click();
        this.page.getCartModal().should('not.be.visible');
    }
    
    closeCheckoutModalIfVisible() {
        cy.get('body').then($body => {
            // Check if checkout modal exists
            if ($body.find('#checkoutModal').length > 0) {
                // Only click if modal is visible
                cy.get('#checkoutModal').then($modal => {
                    if ($modal.is(':visible')) {
                        cy.get('.close-checkout-modal').click();
                        cy.get('#checkoutModal').should('not.be.visible');
                    }
                });
            }
        });
    }

    clickProceedToCheckout() {
        this.page.getProceedToCheckoutButton().click();
    }


}
