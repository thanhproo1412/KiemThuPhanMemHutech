import NavBarPage from './NavBar';
import { NavItemKey } from './NavBar.types';

export default class NavBarAction {
  private page = new NavBarPage();

  clickNavItem(key: NavItemKey) {
    this.page.getNavItem(key).should('be.visible').click();

    // Skip URL check for loggedInAs and logout (logout redirects to login page)
    if (key !== 'loggedInAs' && key !== 'logout') {
      cy.url().should('include', this.page['navMap'][key]);
    }
  }

  verifyNavVisible() {
    this.page.getNavList().should('be.visible');
  }

  verifyLoggedInAsVisible(username: string) {
    this.page.getNavItem('loggedInAs')
      .should('be.visible')
      .and('contain.text', "testusertestuser");
  }
}
