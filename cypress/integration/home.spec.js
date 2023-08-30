// cypress/integration/home.spec.js

describe('Home Page', () => {
  // This test visits the home page of your Rails app
  it('should visit the home page', () => {
    cy.visit('/');
  });

  // This test checks if there are products on the page
  it('should have products on the page', () => {
    cy.get('.products article').should('be.visible');
  });

  // This test checks if there are exactly 2 products on the page
  it('should have 2 products on the page', () => {
    cy.get('.products article').should('have.length', 2);
  });
});

