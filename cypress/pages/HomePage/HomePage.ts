export default class HomePage {

    getLogo() {
        return cy.get('.logo img[alt="Website for automation practice"]');
    }

    getSliderCarousel() {
        return cy.get('#slider-carousel');
    }

    getHomeNavButton() {
        return cy.get('.shop-menu ul.nav.navbar-nav li a[href="/"]');
    }
}