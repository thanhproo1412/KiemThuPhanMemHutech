import NavBarPage from './NavBar';
import { NavItemKey } from './NavBar.types';

export default class NavBarAction {
  private page = new NavBarPage();

  clickNavItem(key: NavItemKey) {
    this.page.getNavItem(key).should('be.visible').click();

    if (key !== 'loggedInAs') {
      cy.url().should('include', this.page['navMap']['signupLogin']); // Logout is navigating to login page
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
