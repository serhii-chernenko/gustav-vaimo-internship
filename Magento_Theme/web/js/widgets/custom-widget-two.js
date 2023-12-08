define(['jquery', 'jquery-ui-modules/widget'], function ($) {
  $.widget('vaimo.customWidgetTwo', {
    options: {
      STORE_URL:
        'https://app.exampleproject.test/rest/all/V1/storelocator/stores',
    },

    _fetchStore() {
      return $.ajax({
        url: this.options.STORE_URL,
        method: 'GET',
        dataType: 'json',
      })
        .done(function (data) {
          return data;
        })
        .fail(function (error) {
          console.log('Error: ', error);
        });
    },
  });

  return $.vaimo.customWidgetTwo;
});
