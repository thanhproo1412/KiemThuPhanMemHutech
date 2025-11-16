interface NavMap {
  home: '';
  products: 'products';
  cart: 'view_cart';
  signupLogin: 'login';
  testCases: 'test_cases';
  apiTesting: 'api_list';
  contactUs: 'contact_us';
  videoTutorials: 'youtube';
}

type NavItemKey = keyof NavMap;

class NavBarPage {
  private navMap: NavMap = {
    home: '',
    products: 'products',
    cart: 'view_cart',
    signupLogin: 'login',
    testCases: 'test_cases',
    apiTesting: 'api_list',
    contactUs: 'contact_us',
    videoTutorials: 'youtube'
  };

  getNavList() {
    return cy.get('ul.nav.navbar-nav');
  }

  getNavItem(key: NavItemKey) {
    const href = this.navMap[key];
    return this.getNavList().find(`a[href*="${href}"]`);
  }
}

export default class NavBarAction {
  private page = new NavBarPage();

  clickNavItem(key: NavItemKey) {
    this.page.getNavItem(key).click();
  }

  verifyNavVisible() {
    this.page.getNavList().should('be.visible');
  }
}
