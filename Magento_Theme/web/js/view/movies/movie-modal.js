define(['uiElement', 'jquery'], (uiElement, $) => {
  return uiElement.extend({
    defaults: {
      template: 'Magento_Theme/movies/movie-modal-layout',
      links: {
        movieList: '${ $.parentName }:movieList',
        movie: '${ $.parentName }:movie',
        modalMode: '${ $.parentName }:modalMode',
      },
      tracks: {
        movieList: true,
        movie: true,
      },
      modules: {
        parentComponent: '${ $.parentName }',
      },
      listens: {
        movie: 'handleMovieInputFields',
      },
    },

    initialize() {
      this._super();
    },

    randomIdNumber() {
      const randomNumber = Math.floor(Math.random() * 100000).toString();

      return 'tt00' + randomNumber.padStart(5, '0');
    },

    clearInputFields() {
      $('#title').val('');
      $('#year').val('');
      $('#poster').val('');
    },

    closeMovieModal(e) {
      e.preventDefault();
      $('.movie-modal').hide();
    },

    handleMovieInputFields() {
      setTimeout(() => {
        if (this.modalMode === 'edit' && this.movie) {
          $('#title').val(this.movie.Title);
          $('#year').val(this.movie.Year);
          $('#poster').val(this.movie.Poster);
          $('.movie-modal__btn-add').text('Edit');
        } else {
          this.clearInputFields();
          $('.movie-modal__btn-add').text('Add');
        }
      }, 200);
    },

    editExistingMovie(e) {
      e.preventDefault();

      const title = $('#title').val();
      const year = $('#year').val();
      const poster = $('#poster').val();

      if (this.modalMode === 'edit' && this.movie) {
        const movieIndex = this.movieList.findIndex(
          m => m.imdbID === this.movie.imdbID
        );

        if (movieIndex !== -1) {
          this.movieList[movieIndex] = {
            ...this.movieList[movieIndex],
            Title: title,
            Year: year,
            Poster: poster,
          };

          this.parentComponent().sendDataToLocalStorage(this.movieList);
          this.parentComponent().getDataFromLocalStorage();
          this.clearInputFields();
          this.closeMovieModal(e);
        }
      }
    },

    addMovie(e) {
      e.preventDefault();
      const title = $('#title').val();
      const year = $('#year').val();
      const poster = $('#poster').val();
      const imdbId = this.randomIdNumber();

      const movieObject = {
        Poster: poster,
        Title: title,
        Type: 'movie',
        Year: year,
        imdbID: imdbId,
        Rating: 0,
      };

      this.movieList.push(movieObject);
      this.parentComponent().sendDataToLocalStorage(this.movieList);
      this.parentComponent().getDataFromLocalStorage();
      this.clearInputFields();
      this.closeMovieModal(e);
      $('html, body').animate(
        {
          scrollTop: $(document).height() * 0.7,
        },
        'slow'
      );
    },
  });
});
