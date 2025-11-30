import TestCasesPage from './TestCasesPage';

export default class TestCasesPageAction {
    private page: TestCasesPage;

    constructor() {
        this.page = new TestCasesPage();
    }

    verifyTestCasesPageVisible() {
        this.page.getTestCasesTitle()
            .should('be.visible')
            .and('contain.text', 'Test Cases');
    }
}
