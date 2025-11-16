export interface NavMap {
  home: '';
  products: 'products';
  cart: 'view_cart';
  signupLogin: 'login';
  logout: 'logout';
  deleteAccount: 'delete_account';
  testCases: 'test_cases';
  apiTesting: 'api_list';
  contactUs: 'contact_us';
  videoTutorials: 'youtube';
  loggedInAs: ''; // special case, không có href
}

export type NavItemKey = keyof NavMap;
