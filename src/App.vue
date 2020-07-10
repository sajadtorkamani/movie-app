<template>
  <div id="app" class="app">
    <h1>Movie App</h1>

    <p class="subtitle">
      Search for any movie.
    </p>

    <section class="actions">
      <form v-on:submit.prevent="search" class="search-bar">
        <input
          type="text"
          placeholder="Enter a title..."
          v-model="searchTerm"
          data-testid="search-input"
        />
        <button
          type="submit"
          class="search-btn"
          data-testid="search-btn"
          :disabled="searchTerm.length === 0"
        >
          Search
        </button>
      </form>
    </section>

    <p v-if="isLoading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>
    <movie-list v-else-if="movies" :movies="movies" :term="submittedTerm" />
  </div>
</template>

<script>
import MovieList from './components/MovieList';
import movieService from './lib/services/movieService';

export default {
  name: 'App',
  components: {
    MovieList,
  },

  data() {
    return {
      searchTerm: '',
      submittedTerm: '',
      movies: null,
      isLoading: false,
      error: null,
    };
  },

  methods: {
    search() {
      this.isLoading = true;

      movieService
        .searchByTitle(this.searchTerm)
        .then((movies) => {
          this.movies = movies;
          this.submittedTerm = this.searchTerm;
          this.error = null;
        })
        .catch((err) => {
          this.error = err.message;
          this.movies = null;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: black;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}

.app {
  margin: 35px auto 40px;
  max-width: 800px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
}

h1 {
  margin-bottom: 5px;
}

.subtitle {
  margin-bottom: 20px;
}

.actions {
  margin-bottom: 25px;
}

.search-bar {
  margin-bottom: 15px;

  input {
    width: 245px;
    max-width: 100%;
  }
}

input[type='text'],
button {
  padding: 8px 10px;
}

.vm--modal {
  box-shadow: 0 0 8px 0 #ccc;
  overflow-y: auto;
}
</style>
