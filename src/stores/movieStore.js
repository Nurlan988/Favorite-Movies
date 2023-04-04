import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

//Option API

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    movies: [],
    activeTab: 2,

  }),
  getters: {
    watchedMovies() {
      return this.movies.filter(movie => movie.isWatched);
    },
  },
  actions: {
    setActiveTab(id) {
      this.activeTab = id;
    },
    toggleWatched(id) {
      const ind = this.movies.findIndex(movie => movie.id === id);
      this.movies[ind].isWatched = !this.movies[ind].isWatched;
    },
    deleteMovie(id) {
      this.movies = this.movies.filter(movie => movie.id !== id);
    }
  }
});


//Composition API

// export const useMovieStore = defineStore("movieStore", () => {
//   const movies = ref([]);
//   const activeTab = ref(2);

//   const watchedMovies = computed(() => {
//     movies.value.filter(movie => movie.isWatched);
//   });

//   const setActiveTab = (id) => {
//     activeTab.value = id;
//   };
//   const toggleWatched = (id) => {
//     const ind = movies.value.findIndex(movie => movie.id === id);
//     movies.value[ind].isWatched = !movies.value[ind].isWatched;
//   };
//   const deleteMovie = (id) => {
//     movies.value = movies.value.filter(movie => movie.id !== id);
//   };
//   return {
//     movies,
//     activeTab,
//     watchedMovies,
//     setActiveTab,
//     toggleWatched,
//     deleteMovie,
//   };
// });