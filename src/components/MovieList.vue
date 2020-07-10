<template>
  <section class="movie-list">
    <div v-if="movies.length > 0" class="list">
      <div
        v-for="(movie, index) in movies"
        :key="index"
        class="movie"
        v-on:click="openMovieModal(movie)"
      >
        <img
          :src="movie.Poster"
          :alt="movie.Title"
          :title="movie.Title"
          class="poster"
        />
        <h3 class="title">{{ movie.Title }} ({{ movie.Year }})</h3>
      </div>
    </div>

    <div v-else class="not-found">
      <p>No movies found for "{{ term }}"</p>
    </div>
  </section>
</template>

<script>
import MovieModal from './MovieModal';
import movieService from '../lib/services/movieApi';

export default {
  name: 'MovieList',

  props: {
    movies: Array,
    term: String,
  },

  data() {
    return {
      movieBeingViewed: null,
    };
  },

  methods: {
    openMovieModal(movie) {
      movieService.fetchMovieById(movie.imdbID).then((movie) => {
        this.$modal.show(MovieModal, { movie }, { height: 'auto' });
      });
    },

    hideMovieModal() {
      this.$modal.hide(MovieModal);
    },
  },
};
</script>

<style scoped lang="scss">
.gift-list {
  border: 1px solid #ccc;
  padding: 15px;
}

.list {
  display: flex;
  flex-direction: column;
}

.movie {
  box-shadow: 0 0 8px 0 #ccc;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  transition: 0.3s;

  .poster {
    margin-right: 15px;
    max-width: 80px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
}

.not-found {
  p {
    margin-bottom: 10px;
  }

  img {
    max-width: 210px;
  }
}
</style>
