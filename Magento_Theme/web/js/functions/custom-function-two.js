define(['jquery'], function ($) {
  return function () {
    const DATA_URL =
      'https://app.exampleproject.test/rest/all/V1/directory/countries/SE';

    function fetchData() {
      return $.ajax({
        url: DATA_URL,
        method: 'GET',
        dataType: 'json',
      });
    }

    return fetchData()
      .then(function (data) {
        return data;
      })
      .fail(function (error) {
        throw new Error('Error: ' + error.message);
      });
  };
});
