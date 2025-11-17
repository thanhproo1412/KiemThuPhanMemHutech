import SignupPage from './SignupPage';
import { IPersonalInfoData, IAddressInfoData } from './SignupPage.types';
import utils from '../../support/utils';
import { UserDataType } from '../../types/UserDataType';


export default class SignupPageAction {
  private page: SignupPage;

  constructor() {
    this.page = new SignupPage();
  }

  // Fill personal info
  fillPersonalInfo(data: IPersonalInfoData) {
    if (data.title === 'Mr') this.page.getTitleMr().check({ force: true });
    else if (data.title === 'Mrs') this.page.getTitleMrs().check({ force: true });

    this.page.getNameInput().type(data.name);
    this.page.getPasswordInput().type(data.password);

    if (data.day) this.page.getDaysSelect().select(data.day);
    if (data.month) {
      const monthValue = utils.formatMonth(data.month);
      this.page.getMonthsSelect().select(monthValue);
    }
    if (data.year) this.page.getYearsSelect().select(data.year);

    if (data.newsletter) this.page.getNewsletterCheckbox().check({ force: true });
    if (data.optin) this.page.getOptinCheckbox().check({ force: true });
  }

  // Fill address info
  fillAddressInfo(data: IAddressInfoData) {
    this.page.getFirstNameInput().type(data.firstName);
    this.page.getLastNameInput().type(data.lastName);
    if (data.company) this.page.getCompanyInput().type(data.company);
    this.page.getAddress1Input().type(data.address1);
    if (data.address2) this.page.getAddress2Input().type(data.address2);
    this.page.getCountrySelect().select(data.country);
    if (data.state) this.page.getStateInput().type(data.state);
    this.page.getCityInput().type(data.city);
    this.page.getZipcodeInput().type(data.zipcode);
    this.page.getMobileNumberInput().type(data.mobileNumber);
  }

  fillAllInfo(userData: UserDataType) {
    this.fillPersonalInfo({
      ...userData.personalInfo,
      name: userData.username,
    });

    this.fillAddressInfo(userData.addressInfo);
  }

  submit() {
    this.page.getCreateAccountButton().click();
  }
}