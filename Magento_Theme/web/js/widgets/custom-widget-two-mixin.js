define(['jquery'], function ($) {
  const widgetMixin = {
    _create() {
      this._super();

      this._fetchStore()
        .done(data => {
          this._showStore(data);
        })
        .fail(function (error) {
          console.log('Error: ', error);
        });
    },

    _showStore(store) {
      let html = '<ul>';

      store.items.forEach(item => {
        html += `<li>Name: ${item.name}</li>`;
        html += `<li>City: ${item.city}</li>`;
        html += `<li>Description: ${item.description}</li>`;
        html += `<li>Address: ${item.address}</li>`;
      });

      html += '</ul>';

      $('.js-store-list').html(html);
    },
  };

  return function (originalWidget) {
    $.widget('vaimo.customWidgetTwo', originalWidget, widgetMixin);

    return $.vaimo.customWidgetTwo;
  };
});
