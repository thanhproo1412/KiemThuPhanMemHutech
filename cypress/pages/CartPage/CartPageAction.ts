import CartPage from './CartPage';

export default class CartPageAction {
    private page: CartPage;

    constructor() {
        this.page = new CartPage();
    }

    clickCartButton() {
        this.page.getCartButton().click();
    }

    verifyCartPageVisible() {
        this.page.getCartTitle()
            .should('be.visible')
            .and('contain.text', 'Shopping Cart');
    }

    verifyProductsInCart(count: number) {
        this.page.getCartItems().should('have.length', count);
    }

    verifyProductDetails(index: number, name: string, price: string, quantity: string, total: string) {
        this.page.getCartItemName(index).should('contain.text', name);
        this.page.getCartItemPrice(index).should('contain.text', price);
        this.page.getCartItemQuantity(index).should('contain.text', quantity);
        this.page.getCartItemTotalPrice(index).should('contain.text', total);
    }

    verifyProductQuantity(index: number, quantity: string) {
        this.page.getCartItemQuantity(index).should('contain.text', quantity);
    }

}
