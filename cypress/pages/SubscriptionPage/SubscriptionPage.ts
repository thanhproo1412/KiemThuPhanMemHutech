export default class SubscriptionPage {

    // Footer subscription section

    getSubscriptionHeading() { return cy.get('.footer-widget h2'); }     // assuming SUBSCRIPTION heading has this selector
    getSubscriptionInput() { return cy.get('#susbscribe_email'); }       // input for email
    getSubscribeButton() { return cy.get('#subscribe'); }                // arrow button to submit
    getSuccessMessage() { return cy.get('.alert-success'); }             // success message
}
