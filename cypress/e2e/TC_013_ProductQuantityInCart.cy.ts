import HomePageAction from '../pages/HomePage/HomePageAction';
import NavBarAction from '../pages/NavBar/NavBarAction';
import ProductDetailPageAction from '../pages/ProductDetailPage/ProductDetailPageAction';
import CartPageAction from '../pages/CartPage/CartPageAction';

describe('TC_013 – Verify Product quantity in Cart', () => {

    const homePage = new HomePageAction();
    const navBarAction = new NavBarAction();
    const productDetailAction = new ProductDetailPageAction();
    const cartAction = new CartPageAction();

    beforeEach(() => {
        cy.visit('/');
    });

    it('Should add product with exact quantity to cart', () => {
        // 3. Verify home page
        homePage.verifyHomePageVisible();

        // 4. Click 'View Product' for first product
        navBarAction.clickNavItem('products'); // hoặc click trên home page nếu có button View Product
        cy.get('.features_items .col-sm-4').first().contains('View Product').click();

        // 5. Verify product detail page
        productDetailAction.verifyProductDetailsVisible();

        // 6. Increase quantity to 4
        productDetailAction.setQuantity(4);

        // 7. Click 'Add to cart'
        productDetailAction.clickAddToCart();
        productDetailAction.closeAddToCartModal();

        // 8. Click 'View Cart' button
        navBarAction.clickNavItem('cart');

        // 9. Verify product is in cart with exact quantity
        cartAction.verifyProductQuantity(0, '4');
    });
});
