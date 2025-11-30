import HomePageAction from "../pages/HomePage/HomePageAction";
import NavBarAction from "../pages/NavBar/NavBarAction";
import ProductsPageAction from "../pages/ProductsPage/ProductsPageAction";

describe("TC_009 – Search Product Functionality", () => {

    const homePage = new HomePageAction();
    const navBar = new NavBarAction();
    const productsAction = new ProductsPageAction();

    beforeEach(() => {
        cy.visit("/");
    });

    it("Should search a product and verify search results", { tags: '@smoke' }, () => {

        // 3. Verify Home Page visible
        homePage.verifyHomePageVisible();

        // 4. Click Products
        navBar.clickNavItem("products");

        // 5. Verify All Products page visible
        productsAction.verifyAllProductsPageVisible();

        // 6. Enter product name and click Search
        productsAction.searchProduct("dress");

        // 7. Verify SEARCHED PRODUCTS title visible
        productsAction.verifySearchTitleVisible();

        // 8. Verify searched products are visible
        productsAction.verifySearchedProductsVisible();
    });
});
