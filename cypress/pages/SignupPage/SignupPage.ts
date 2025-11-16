export default class SignupPage {
  // Title radio
  getTitleMr() {
    return cy.get('input#id_gender1');
  }

  getTitleMrs() {
    return cy.get('input#id_gender2');
  }

  // Personal info
  getNameInput() {
    return cy.get('input[data-qa="name"]');
  }

  getEmailInput() {
    return cy.get('input[data-qa="email"]');
  }

  getPasswordInput() {
    return cy.get('input[data-qa="password"]');
  }

  getDaysSelect() {
    return cy.get('select[data-qa="days"]');
  }

  getMonthsSelect() {
    return cy.get('select[data-qa="months"]');
  }

  getYearsSelect() {
    return cy.get('select[data-qa="years"]');
  }

  // Checkboxes
  getNewsletterCheckbox() {
    return cy.get('input#newsletter');
  }

  getOptinCheckbox() {
    return cy.get('input#optin');
  }

  // Address info
  getFirstNameInput() {
    return cy.get('input[data-qa="first_name"]');
  }

  getLastNameInput() {
    return cy.get('input[data-qa="last_name"]');
  }

  getCompanyInput() {
    return cy.get('input[data-qa="company"]');
  }

  getAddress1Input() {
    return cy.get('input[data-qa="address"]');
  }

  getAddress2Input() {
    return cy.get('input[data-qa="address2"]');
  }

  getCountrySelect() {
    return cy.get('select[data-qa="country"]');
  }

  getStateInput() {
    return cy.get('input[data-qa="state"]');
  }

  getCityInput() {
    return cy.get('input[data-qa="city"]');
  }

  getZipcodeInput() {
    return cy.get('input[data-qa="zipcode"]');
  }

  getMobileNumberInput() {
    return cy.get('input[data-qa="mobile_number"]');
  }

  // Submit button
  getCreateAccountButton() {
    return cy.get('button[data-qa="create-account"]');
  }

  // Page header for verification
  getHeader() {
    return cy.get('h2.title.text-center').contains('Enter Account Information');
  }
}
