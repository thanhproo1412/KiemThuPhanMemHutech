import { NavMap, NavItemKey } from './NavBar.types';

export default class NavBar {
  private navMap: NavMap = {
    home: '',
    products: 'products',
    cart: 'view_cart',
    signupLogin: 'login',
    logout: 'logout',
    deleteAccount: 'delete_account',
    testCases: 'test_cases',
    apiTesting: 'api_list',
    contactUs: 'contact_us',
    videoTutorials: 'youtube',
    loggedInAs: ''
  };

  getNavList() {
    return cy.get('ul.nav.navbar-nav');
  }

  getNavItem(key: NavItemKey) {
    if (key === 'loggedInAs') {
      // Trả về <a> chứa "Logged in as <username>"
      return this.getNavList().contains('a', 'Logged in as');
    }
    const href = this.navMap[key];
    return this.getNavList().find(`a[href*="${href}"]`);
  }
}
