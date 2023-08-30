describe('Product details', () => {
  it('can navigate from home page to product detail page', () => {
    // Visit the home page
    cy.visit('/');

    // Find a product link and click on it
    cy.get('.product').first().find('a').click();

    // Assert that the URL has changed to the product detail page
    cy.url().should('include', '/products/');
    
    // Add more assertions as needed for the product detail page content
    // For example:
    // cy.get('.product-details').should('be.visible');
    // cy.contains('Product Name').should('be.visible');
    // ...
  });
});
