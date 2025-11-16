export default class NavBarPage {
  private navMap: Record<string, string> = {
    home: '',
    products: 'products',
    cart: 'view_cart',
    signupLogin: 'login',
    testCases: 'test_cases',
    apiTesting: 'api_list',
    contactUs: 'contact_us',
    videoTutorials: 'youtube'
  };

  // Getter nav list
  getNavList() {
    return cy.get('ul.nav.navbar-nav');
  }

  // Getter link by key
  getNavItem(key: keyof typeof this.navMap) {
    if (key === 'videoTutorials') {
      return this.getNavList().find('a[href*="youtube.com"]');
    } else {
      const href = this.navMap[key];
      return this.getNavList().find(`li a[href="/${href}"]`);
    }
  }
}
