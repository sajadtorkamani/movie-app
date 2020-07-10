import axios from 'axios';

const movieApi = axios.create({ baseURL: 'https://www.omdbapi.com' });

// Possible OMDB API errors
const ERROR_NO_RESULTS = 'Movie not found!';
const ERROR_TOO_MANY_RESULTS = 'Too many results.';

// Append OMDB API key query param to all requests (https://www.omdbapi.com/)
movieApi.interceptors.request.use((config) => {
  config.params = {
    apikey: process.env.VUE_APP_OMDB_API_KEY,
  };

  return config;
});

class MovieService {
  /**
   * Search for movies by title.
   *
   * @param {String} title
   * @returns {Promise<Array>}
   */
  async searchByTitle(title) {
    const res = await movieApi.get(`/?s=${title}`);
    const movies = res.data.Search;
    const error = res.data.Error;

    // We have movies
    if (movies) {
      return movies;
    }

    // No movies found
    if (error === ERROR_NO_RESULTS) {
      return [];
    }

    // Too many results
    if (error === ERROR_TOO_MANY_RESULTS) {
      throw new Error(
        `Too many results found for "${title}". Please try to be more specific.`
      );
    }

    // Some other error
    throw new Error(error);
  }

  /**
   * Fetch a movie by ID.
   *
   * @param {Number} id
   * @returns {Promise<{}>}
   */
  async fetchMovieById(id) {
    const res = await movieApi.get(`/?i=${id}`);

    return res.data;
  }
}

const movieService = new MovieService();

export default movieService;
