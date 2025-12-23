import SubscriptionPage from './SubscriptionPage';

export default class SubscriptionPageAction {
    private page: SubscriptionPage;

    constructor() {
        this.page = new SubscriptionPage();
    }

    scrollToFooter() {
        // Scroll the footer subscription section into view instead of scrolling the window
        cy.get('.footer-widget').scrollIntoView({ duration: 500 });
    }

    verifySubscriptionHeadingVisible() {
        this.page.getSubscriptionHeading()
            .should('be.visible')
            .and('contain.text', 'Subscription');
    }

    enterEmailAndSubscribe(email: string) {
        this.page.getSubscriptionInput().type(email);
        this.page.getSubscribeButton().click();
    }

    verifySuccessMessageVisible() {
        this.page.getSuccessMessage()
            .should('be.visible')
            .and('contain.text', 'You have been successfully subscribed!');
    }
}
