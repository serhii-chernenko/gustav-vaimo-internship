define(['jquery', 'mage/utils/wrapper'], function ($, wrapper) {
  return function (extendedFunction) {
    return wrapper.wrap(extendedFunction, function (originalFunction) {
      return originalFunction()
        .then(function (data) {
          showData(data);

          return data;
        })
        .catch(function (error) {
          throw new Error('Error: ' + error.message);
        });
      function showData(countryData) {
        if (countryData) {
          $('.js-country-name').text(countryData.full_name_english);
        } else {
          $('.js-welcome-text').hide();
        }
      }
    });
  };
});
