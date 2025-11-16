
describe('Verify Product Detail Page ', () => {
  it('Verify Product Detail Page ', () => {

    // Visit the website
    cy.visit('http://automationexercise.com');

    // cy.click(cy.contains('a', ' Products'));

    cy.get('div.features_items').should('be.visible');

    cy.contains('div.product-image-wrapper','Rs. 400').eq(0).find('div.choose a').click();

    cy.wait(5000); // Wait for 5 seconds

    cy.end();


  });
});
