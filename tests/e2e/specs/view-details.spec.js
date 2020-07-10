import {
  REGEX_DETAILS_ENDPOINT,
  REGEX_SEARCH_ENDPOINT,
} from '../support/constants';

describe('View details', () => {
  beforeEach(() => {
    cy.server()
      .route('GET', REGEX_SEARCH_ENDPOINT, 'fixture:movies')
      .route('GET', REGEX_DETAILS_ENDPOINT, 'fixture:movie')
      .visit('/');
  });

  context('when user clicks on a movie listing', () => {
    it('movie details are shown in a pop-up modal', () => {
      cy.findByTestId('search-input').type('batman');
      cy.findByTestId('search-btn').click();

      // Should show modal on clicking movie result
      cy.findAllByTestId('movie-result').first().click();
      cy.findByTestId('movie-modal').should('exist');

      // Should be able to close modal
      cy.findByTestId('movie-modal-close-btn').click();
      cy.findByTestId('movie-modal').should('not.exist');
    });
  });
});
