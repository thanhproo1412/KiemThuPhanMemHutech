/// <reference types="cypress" />

export class CommonPage {
    // Atomic Actions
    click(selector: string) {
        cy.get(selector).click();
    }

    type(selector: string, text: string) {
        cy.get(selector).clear().type(text);
    }

    check(selector: string) {
        cy.get(selector).check();
    }

    select(selector: string, value: string) {
        cy.get(selector).select(value);
    }

    shouldBeVisible(selector: string) {
        cy.get(selector).should('be.visible');
    }

    containsText(selector: string, text: string) {
        cy.get(selector).should('contain.text', text);
    }

    visitUrl(url: string) {
        cy.visit(url);
    }
}
