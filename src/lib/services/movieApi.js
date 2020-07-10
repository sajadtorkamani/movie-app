import axios from 'axios';

const movieApi = axios.create({ baseURL: 'https://www.omdbapi.com' });

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
   * @returns {Promise<{}>}
   */
  async searchByTitle(title) {
    const res = await movieApi.get(`/?s=${title}`);

    return res.data.Search;
  }

  /**
   * Fetch a movie by ID.
   * @param {Number} id
   */
  async fetchMovieById(id) {
    const res = await movieApi.get(`/?i=${id}`);

    return res.data;
  }
}

const movieService = new MovieService();

export default movieService;
