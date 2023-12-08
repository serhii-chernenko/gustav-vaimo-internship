define(['jquery'], function ($) {
  return {
    BASE_URL: 'https://app.exampleproject.test/rest/all/V1',
    fetchCountry() {
      return $.ajax({
        url: `${this.BASE_URL}/directory/countries/FI`,
        method: 'GET',
        dataType: 'json',
      })
        .done(function (data) {
          return data;
        })
        .fail(function (error) {
          throw new Error('Error: ' + error.message);
        });
    },
    fetchCurrency() {
      return $.ajax({
        url: `${this.BASE_URL}/directory/currency`,
        method: 'GET',
        dataType: 'json',
      });
    },
    fetchData() {
      this.fetchCountry();
      this.fetchCurrency();
    },
  };
});
