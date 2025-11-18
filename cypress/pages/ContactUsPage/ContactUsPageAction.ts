import ContactUsPage from './ContactUsPage';

interface ContactDataType {
    name: string;
    email: string;
    subject: string;
    message: string;
    fileName: string;
}

export default class ContactUsPageAction {
    private page: ContactUsPage;

    constructor() {
        this.page = new ContactUsPage();
    }

    verifyGetInTouchVisible() {
        this.page.getGetInTouchHeading().should('be.visible')
            .and('contain.text', 'Get In Touch');
    }

    fillContactUsForm(data: ContactDataType) {
        this.page.getNameInput().type(data.name);
        this.page.getEmailInput().type(data.email);
        this.page.getSubjectInput().type(data.subject);
        this.page.getMessageTextarea().type(data.message);
    }
    
    uploadFile(fileName: string) {
        this.page.getFileInput().attachFile(fileName); 
    }

    clickSubmitButton() {
        this.page.getSubmitButton().click();
    }

    verifySuccessMessageVisible() {
        this.page.getSuccessMessage().should('be.visible')
            .and('contain.text', 'Success! Your details have been submitted successfully.');
    }

    clickHomeButton() {
        this.page.getHomeButton().click();
    }
}