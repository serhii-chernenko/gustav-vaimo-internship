define(['jquery', 'mage/url'], function ($, urlBuilder) {
  return {
    COUNTRY_URL: '/rest/all/V1/directory/countries/FI',
    CURRENCY_URL: '/rest/all/V1/directory/currency',
    fetchCountry() {
      return $.ajax({
        url: urlBuilder.build(this.COUNTRY_URL),
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
        url: urlBuilder.build(this.CURRENCY_URL),
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
