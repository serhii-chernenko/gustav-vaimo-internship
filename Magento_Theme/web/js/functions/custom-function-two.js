define(['jquery', 'mage/url'], function ($, urlBuilder) {
  return function () {
    const ACTION_URL = '/rest/all/V1/directory/countries/SE';

    function fetchData() {
      return $.ajax({
        url: urlBuilder.build(ACTION_URL),
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
