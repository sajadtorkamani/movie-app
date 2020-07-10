import { REGEX_SEARCH_ENDPOINT } from '../support/constants';

describe('Search', () => {
  beforeEach(() => {
    cy.server()
      .route('GET', REGEX_SEARCH_ENDPOINT, 'fixture:movies')
      .visit('/');
  });

  context('when user searches with valid movie title', () => {
    it('list of movie results are shown', () => {
      cy.findByTestId('search-input').type('batman');
      cy.findByTestId('search-btn').click();

      cy.fixture('movies').then((moviesResponse) => {
        cy.findAllByTestId('movie-result').should(
          'have.length',
          moviesResponse.Search.length
        );
      });
    });
  });

  context('when no movie results are found', () => {
    it('no results message is shown', () => {
      cy.route('GET', REGEX_SEARCH_ENDPOINT, 'fixture:no-movies');

      cy.findByTestId('search-input').type('foobar');
      cy.findByTestId('search-btn').click();

      cy.findByText(/No movies found for "foobar"/i).should('exist');
    });
  });

  context('when too many movie results are found', () => {
    it('helpful message should be shown', () => {
      cy.route('GET', REGEX_SEARCH_ENDPOINT, 'fixture:too-many-movies');

      cy.findByTestId('search-input').type('foobar');
      cy.findByTestId('search-btn').click();

      cy.findByText(/Too many results found/i).should('exist');
    });
  });
});
