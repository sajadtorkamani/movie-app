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
          :src="movie.Poster === 'N/A' ? posterPlaceholderUrl : movie.Poster"
          :alt="movie.Title"
          :title="movie.Title"
          class="poster"
        />
        <h3 class="title">{{ movie.Title }} ({{ movie.Year }})</h3>
      </div>
    </div>

    <div v-else class="not-found">
      <p>No movies found for "{{ term }}".</p>
    </div>
  </section>
</template>

<script>
import movieService from '../lib/services/movieService';
import posterPlaceholderUrl from '../assets/images/poster-placeholder.png';
import MovieModal from './MovieModal';

export default {
  name: 'MovieList',

  props: {
    movies: Array,
    term: String,
  },

  data() {
    return { posterPlaceholderUrl };
  },

  methods: {
    openMovieModal(movie) {
      movieService.fetchMovieById(movie.imdbID).then((movie) => {
        this.$modal.show(
          MovieModal,
          { movie },
          {
            adaptive: true,
            scrollable: true,
            height: 'auto',
            name: 'movie-modal',
          }
        );
      });
    },
  },
};
</script>

<style scoped lang="scss">
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
    transform: scale(1.02);
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
