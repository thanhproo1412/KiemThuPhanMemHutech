export default class CartPage {

    getCartTitle() {
        return cy.get('.breadcrumb .active').contains('Shopping Cart');
    }

    getCartButton() {
        return cy.get('a[href="/view_cart"]');
    }

    getCartItems() {
        return cy.get('#cart_info_table tbody tr');
    }

    getCartItemName(index: number) {
        return this.getCartItems().eq(index).find('.cart_description h4 a');
    }

    getCartItemPrice(index: number) {
        return this.getCartItems().eq(index).find('.cart_price p');
    }

    getCartItemQuantity(index: number) {
        return this.getCartItems().eq(index).find('.cart_quantity button');
    }

    getCartItemTotalPrice(index: number) {
        return this.getCartItems().eq(index).find('.cart_total_price');
    }
}
