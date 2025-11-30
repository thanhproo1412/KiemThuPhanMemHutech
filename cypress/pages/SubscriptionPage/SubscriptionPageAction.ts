import SubscriptionPage from './SubscriptionPage';

export default class SubscriptionPageAction {
    private page: SubscriptionPage;

    constructor() {
        this.page = new SubscriptionPage();
    }

    scrollToFooter() {
        cy.scrollTo('bottom');
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
