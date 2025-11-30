import CheckoutPage from './CheckoutPage';

export default class CheckoutPageAction {
    private page: CheckoutPage;

    constructor() {
        this.page = new CheckoutPage();
    }

    verifyAddressDetailsVisible() {
        this.page.getAddressDetails().should('be.visible');
    }

    enterComment(comment: string) {
        this.page.getCommentTextarea().type(comment);
    }

    clickPlaceOrder() {
        this.page.getPlaceOrderButton().click();
    }

    enterPaymentDetails(name: string, cardNumber: string, cvc: string, month: string, year: string) {
        this.page.getPaymentNameInput().type(name);
        this.page.getPaymentCardNumberInput().type(cardNumber);
        this.page.getPaymentCVCInput().type(cvc);
        this.page.getPaymentExpiryMonthInput().type(month);
        this.page.getPaymentExpiryYearInput().type(year);
    }

    clickPayAndConfirm() {
        this.page.getPayAndConfirmButton().click();
    }

    verifyOrderSuccessMessage() {
        this.page.getOrderSuccessMessage()
            .should('be.visible')
            .and('contain.text', 'Congratulations! Your order has been confirmed!');
    }
}
