describe('App', () => {
  it('renders without crashing', () => {
    cy.visit('/');

    cy.contains('h1', 'Movie App');
  });

  it('search button is disabled if search box is empty', () => {
    cy.visit('/');

    // Disabled by default
    cy.findByTestId('search-btn').should('be.disabled');

    // Enabled once user types something
    cy.findByTestId('search-input').type('a');
    cy.findByTestId('search-btn').should('be.enabled');
    cy.findByTestId('search-input').type('b');
    cy.findByTestId('search-btn').should('be.enabled');

    // Disabled if made empty again
    cy.findByTestId('search-input').clear();
    cy.findByTestId('search-btn').should('be.disabled');
  });
});
