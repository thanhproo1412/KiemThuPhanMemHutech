import HomePageAction from "../pages/HomePage/HomePageAction";
import NavBarAction from "../pages/NavBar/NavBarAction";
import ProductsPageAction from "../pages/ProductsPage/ProductsPageAction";
import ProductDetailPageAction from "../pages/ProductDetailPage/ProductDetailPageAction";

describe("TC_008 – Verify All Products & Product Detail Page", () => {

    const homePage = new HomePageAction();
    const navBar = new NavBarAction();
    const productsAction = new ProductsPageAction();
    const productDetailAction = new ProductDetailPageAction();

    beforeEach(() => {
        cy.visit("/");
    });

    it("Should navigate to Products page and verify product details", () => {

        // 3. Verify home page is visible
        homePage.verifyHomePageVisible();

        // 4. Click Products
        navBar.clickNavItem("products");

        // 5. Verify user is navigated to All Products page
        productsAction.verifyAllProductsPageVisible();

        // 6. Verify products list visible
        productsAction.verifyProductsListVisible();

        // 7. Click View Product on first item
        productsAction.clickFirstViewProduct();

        // 8 + 9. Verify product detail page
        productDetailAction.verifyProductDetailsVisible();
    });
});
