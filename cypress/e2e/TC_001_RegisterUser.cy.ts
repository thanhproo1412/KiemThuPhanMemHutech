import NavBarAction from '../pages/NavBar/NavBarAction';

const navAction = new NavBarAction();

describe('NavBar test', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to products', () => {
    navAction.verifyNavVisible();
    navAction.clickNavItem('products');
    cy.url().should('include', '/products');
  });

});
