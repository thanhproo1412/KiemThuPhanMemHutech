import HomePage from './HomePage';

export default class HomePageAction {
    private page: HomePage;

    constructor() {
        this.page = new HomePage();
    }

    verifyHomePageVisible() {
        cy.title().should('include', 'Automation Exercise');

        this.page.getLogo().should('be.visible');

        this.page.getHomeNavButton().should('be.visible')
            .and('contain.text', 'Home');

        this.page.getSliderCarousel().should('be.visible');
    }
}