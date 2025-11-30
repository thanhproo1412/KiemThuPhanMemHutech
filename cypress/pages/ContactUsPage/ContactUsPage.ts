export default class ContactUsPage {

    getGetInTouchHeading() { return cy.get('.contact-form h2.title.text-center'); }
    getNameInput() { return cy.get('[data-qa="name"]'); }
    getEmailInput() { return cy.get('[data-qa="email"]'); }
    getSubjectInput() { return cy.get('[data-qa="subject"]'); }
    getMessageTextarea() { return cy.get('[data-qa="message"]'); }
    getFileInput() { return cy.get('input[type="file"][name="upload_file"]'); }
    getSubmitButton() { return cy.get('[data-qa="submit-button"]'); }
    getSuccessMessage() { return cy.get('.status.alert-success'); }
    getHomeButton() { return cy.get('.btn-success'); }
}