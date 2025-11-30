export default class CheckoutPage {
    getAddressDetails() { return cy.get('.checkout-information'); }
    getCommentTextarea() { return cy.get('textarea[name="message"]'); }
    getPlaceOrderButton() { return cy.get('a.btn.btn-default.check_out'); }
    getPaymentNameInput() { return cy.get('input[name="name_on_card"]'); }
    getPaymentCardNumberInput() { return cy.get('input[name="card_number"]'); }
    getPaymentCVCInput() { return cy.get('input[name="cvc"]'); }
    getPaymentExpiryMonthInput() { return cy.get('input[name="expiry_month"]'); }
    getPaymentExpiryYearInput() { return cy.get('input[name="expiry_year"]'); }
    getPayAndConfirmButton() { return cy.get('#submit'); }
    getOrderSuccessMessage() { return cy.get('div.col-sm-9 p'); }
}
