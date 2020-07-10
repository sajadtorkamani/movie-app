<template>
  <section class="movie-modal">
    <h2 class="title">{{ movie.Title }}</h2>
    <!--    <img-->
    <!--      :src="movie.Poster"-->
    <!--      :alt="movie.Title"-->
    <!--      :title="movie.Title"-->
    <!--      class="poster"-->
    <!--    />-->

    <table cellpadding="0" cellspacing="0">
      <thead>
        <tr v-for="(detail, index) in details" :key="index">
          <th>{{ detail }}</th>
          <td>{{ movie[detail] }}</td>
        </tr>
      </thead>
    </table>
  </section>
</template>

<script>
export default {
  name: 'MovieModal',

  data() {
    return {
      details: [
        'Year',
        'Rated',
        'Released',
        'Runtime',
        'Genre',
        'Director',
        'Writer',
        'Actors',
        'Plot',
        'Language',
        'Country',
        'Awards',
      ],
    };
  },

  props: {
    movie: Object,
  },
};
</script>

<style scoped lang="scss">
.movie-modal {
  background: black;
  border: 2px solid white;
  padding: 25px 15px;
  min-height: 400px;
}

.title {
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
}

table {
  margin: 0 auto;
  min-width: 250px;
}

th,
td {
  border-bottom: 1px solid white;
  padding: 10px 0;
  text-align: left;
}

th {
  border-right: 1px solid white;
}


td {
  padding-left: 10px;
}
</style>
