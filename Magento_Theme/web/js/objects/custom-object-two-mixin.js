define(['jquery'], function ($) {
  return function (originalObject) {
    originalObject.fetchData = function () {
      Promise.all([this.fetchCountry(), this.fetchCurrency()])
        .then(function (results) {
          const countryData = results[0];
          const currencyData = results[1];

          const euro = currencyData.available_currency_codes.find(
            code => code === 'EUR'
          );
          const finland = countryData.full_name_locale;

          if (euro && finland) {
            $('.js-finland-euro').html(
              `Welcome to ${finland}! Here we use the currency ${euro}.`
            );
          } else {
            console.log('Not all data available.');
          }
        })
        .catch(function (error) {
          console.error('Error fetching data:', error);
        });
    };

    return originalObject;
  };
});
