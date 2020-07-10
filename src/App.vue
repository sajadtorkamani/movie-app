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

    <movie-list v-if="movies" :movies="movies" :term="submittedTerm" />
  </div>
</template>

<script>
import MovieList from './screens/MovieList';
import movieService from './lib/services/movieApi';

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
    };
  },

  methods: {
    search() {
      movieService.searchByTitle(this.searchTerm).then((movies) => {
        console.log('--------------------');
        console.log({ movies });
        console.log('--------------------');
        this.movies = movies;
        this.submittedTerm = this.searchTerm;
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
}

.app {
  border: 1px solid black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 40px auto 30px;
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
</style>
