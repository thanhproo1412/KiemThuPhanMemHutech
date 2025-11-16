import NavBarPage from './NavBar';
import { NavItemKey } from './NavBar.types';

export default class NavBarAction {
  private page = new NavBarPage();

  clickNavItem(key: NavItemKey) {
    this.page.getNavItem(key).should('be.visible').click();

    if (key !== 'loggedInAs') {
      cy.url().should('include', this.page['navMap'][key]);
    }
  }

  verifyNavVisible() {
    this.page.getNavList().should('be.visible');
  }

  // Kiểm tra username hiển thị sau khi login
  verifyLoggedInAsVisible(username: string) {
    this.page.getNavItem('loggedInAs')
      .should('be.visible')
      .and('contain.text', username);
  }
}
