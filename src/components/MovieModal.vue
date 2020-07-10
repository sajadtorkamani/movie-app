<template>
  <section class="movie-modal">
    <div slot="top-right" class="close-btn-container">
      <span v-on:click="$modal.hide('movie-modal')">X Close</span>
    </div>

    <h2 class="title">{{ movie.Title }}</h2>

    <table cellpadding="0" cellspacing="0">
      <thead>
        <tr v-for="(detail, index) in details" :key="index">
          <th>{{ detail }}:</th>
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
  padding: 40px 25px;
  position: relative;
  min-height: 400px;
}

.title {
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
}

.close-btn-container {
  background: black;
  font-size: 14px;
  padding: 10px;
  position: absolute;
  top: 3px;
  right: 0;

  span {
    text-decoration: underline;
  }
}

table {
  margin: 0 auto;
  min-width: 250px;
}

th,
td {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  text-align: left;
}

th {
  font-weight: 400;
  padding-right: 20px;
}
</style>
