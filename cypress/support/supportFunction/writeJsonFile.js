// cypress/utils/fileUtils.js
function writeJsonFile(filePath, data) {
    cy.writeFile(filePath, data)
        .then(() => {
            cy.log(`File written successfully: ${filePath}`);
        });
}

export default writeJsonFile;
