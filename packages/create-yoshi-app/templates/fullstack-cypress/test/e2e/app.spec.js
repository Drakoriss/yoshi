describe('React application', () => {
  it('should display title', () => {
    cy.visit('/');
    cy.get('h2')
      .invoke('text')
      .should('eq', 'Hello World!');
  });
});
