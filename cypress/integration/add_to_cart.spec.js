describe('Add to Cart', () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('/');
  });

  it('increases the cart count when adding products', () => {
    // Get the initial cart count
    cy.get('.cart-count').then(($cartCount) => {
      const initialCartCount = parseInt($cartCount.text(), 10);

      // Click the "Add to Cart" button for the first product
      cy.get('.product').first().find('.add-to-cart').click();

      // Confirm that the cart count has increased by one
      cy.get('.cart-count').should(($newCartCount) => {
        const newCartCount = parseInt($newCartCount.text(), 10);
        expect(newCartCount).to.equal(initialCartCount + 1);
      });
    });
  });
});
