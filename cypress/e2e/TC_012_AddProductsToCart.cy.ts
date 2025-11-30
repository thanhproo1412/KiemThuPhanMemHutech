import HomePageAction from '../pages/HomePage/HomePageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import ProductsPageAction from '../pages/ProductsPage/ProductsPageAction';
import CartPageAction from '../pages/CartPage/CartPageAction';
import productData from '../fixtures/TC_012_AddProductsToCart/TC_012_AddProductsToCartData.json';

describe('TC_012 – Add Products in Cart', () => {
    const homePage = new HomePageAction();
    const navBarAction = new NavBarAction();
    const productsAction = new ProductsPageAction();
    const cartAction = new CartPageAction();

    beforeEach(() => {
        cy.visit('/');
    });

    it('Should add products to cart and verify details', { tags: '@smoke' }, () => {
        // 3. Verify home page
        homePage.verifyHomePageVisible();

        // 4. Click 'Products' button
        navBarAction.clickNavItem('products');

        // 5. Hover over first product and click 'Add to cart'
        productsAction.hoverAndAddToCart(0);

        // 6. Click 'Continue Shopping' button
        productsAction.clickContinueShopping();

        // 7. Hover over second product and click 'Add to cart'
        productsAction.hoverAndAddToCart(1);

        // 8. Click 'View Cart' button
        navBarAction.clickNavItem('cart');

        // 9. Verify both products are added
        cartAction.verifyProductsInCart(2);

        // 10. Verify their details (replace with actual product data)
        cartAction.verifyProductDetails(0, productData.products[0].name, productData.products[0].price, productData.products[0].quantity, productData.products[0].total);
        cartAction.verifyProductDetails(1, productData.products[1].name, productData.products[1].price, productData.products[1].quantity, productData.products[1].total);
    });
});
