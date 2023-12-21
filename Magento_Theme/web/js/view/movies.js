define(['uiComponent', 'jquery', 'uiLayout'], function (
  uiComponent,
  $,
  uiLayout
) {
  'use strict';

  return uiComponent.extend({
    defaults: {
      apiKey: '',
      template: 'Magento_Theme/movies-layout',
      Search: [],
      Title: '',
      Year: '',
      imdbID: '',
      Poster: '',
      Rating: 0,
      movieList: [],
      movie: {},
      modalMode: 'add',
      tracks: {
        movieList: true,
        movie: true,
        modalMode: true,
        Rating: true,
      },
      listens: {
        movieList: 'displayMovies',
      },
    },

    initialize() {
      this._super();
      if (
        typeof localStorage['movieList'] === 'undefined' ||
        localStorage['movieList'] === '[]'
      ) {
        this.fetchMovies();
      } else {
        this.getDataFromLocalStorage();
      }
    },

    fetchMovies() {
      const BASE_URL = `https://www.omdbapi.com/?apikey=${this.apiKey}`;
      const ACTION_URL = `&s=Star%20wars`;

      $.ajax({
        url: `${BASE_URL}${ACTION_URL}`,
        method: 'GET',
        dataType: 'json',
      })
        .done(data => {
          this.movieList = data.Search.map(movie => ({
            ...movie,
            Rating: 0,
          }));
          this.sendDataToLocalStorage(this.movieList);
        })
        .fail(error => {
          throw new Error(error);
        });
    },

    resetMovieRatings() {
      this.movieList.forEach(movie => {
        movie.Rating = 0;
      });
      this.sendDataToLocalStorage(this.movieList);
    },

    openAddMovieModal() {
      this.modalMode = 'add';
      $('.movie-modal__btn-add').text('Add');
      $('#title').val('');
      $('#year').val('');
      $('#poster').val('');
      if ($('.movie-modal').length === 0) {
        this.initializeModal();
      } else {
        $('.movie-modal').show();
      }
    },

    openEditMovieModal(movie) {
      this.modalMode = 'edit';

      this.movie = movie;
      if (this.movie) {
        if ($('.movie-modal').length === 0) {
          this.initializeModal();
        } else {
          $('.movie-modal').show();
        }
      }
    },

    getDataFromLocalStorage() {
      this.movieList = JSON.parse(localStorage.getItem('movieList') || '[]');
    },

    sendDataToLocalStorage(movieList) {
      localStorage.setItem('movieList', JSON.stringify(movieList));
    },

    displayMovies() {
      uiLayout([
        ...this.movieList.map(movie => {
          return {
            component: 'Magento_Theme/js/view/movies/movie',
            name: `movie-${movie.imdbID}`,
            parent: this.name,
            Poster: movie.Poster,
            Title: movie.Title,
            imdbID: movie.imdbID,
            Year: movie.Year,
            Rating: movie.Rating,
          };
        }),
      ]);
    },

    initializeModal() {
      uiLayout([
        {
          component: 'Magento_Theme/js/view/movies/movie-modal',
          name: 'movieModal',
          parent: this.name,
        },
      ]);
    },
  });
});
