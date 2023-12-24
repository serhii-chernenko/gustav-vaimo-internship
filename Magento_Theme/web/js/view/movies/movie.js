define(['uiElement'], uiElement => {
  return uiElement.extend({
    defaults: {
      template: 'Magento_Theme/movies/movie-layout',
      links: {
        movieList: '${ $.parentName }:movieList',
      },
      movie: {},
      tracks: {
        movieList: true,
        movie: true,
        Rating: true,
      },
      modules: {
        parentComponent: '${ $.parentName }',
      },
      Rating: 0,
      numStars: 5,
    },
    listens: {
      movieList: 'displayMovies',
    },

    initialize() {
      this._super();
    },

    setRating(newRating) {
      this.Rating = newRating;

      this.movieList.forEach(movie => {
        if (movie.imdbID === this.imdbID) {
          movie.Rating = this.Rating;
        }
      });
      this.parentComponent().sendDataToLocalStorage(this.movieList);
    },

    openEditMovieModalButton() {
      this.movieList.forEach(movie => {
        if (movie.imdbID === this.imdbID) {
          this.movie = movie;
          this.parentComponent().openEditMovieModal(movie);
        }
      });
    },

    removeMovie() {
      this.movieList = this.movieList.filter(
        movie => movie.imdbID !== this.imdbID
      );
      this.parentComponent().sendDataToLocalStorage(this.movieList);
      this.parentComponent().removeChild(this);
    },
  });
});
