<template>
  <section class="movie-list">
    <div v-if="movies.length > 0" class="list">
      <div v-for="(movie, index) in movies" :key="index" class="movie">
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
export default {
  name: 'MovieList',

  props: {
    movies: Array,
    term: String,
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
  box-shadow: 0 0 8px 0px #ccc;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;

  .poster {
    margin-right: 15px;
    max-width: 80px;
  }

  .title {
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
