define(['jquery', 'mage/url'], function ($, urlBuilder) {
  $.widget('vaimo.customPostForm', {
    options: {
      actionUrl: '/testform/index/submit',
    },

    _create() {
      $('.my-custom-form').on('submit', this.submitForm.bind(this));
    },

    submitForm(e) {
      e.preventDefault();

      $.ajax({
        url: urlBuilder.build(this.options.actionUrl),
        type: 'POST',
        data: $('.my-custom-form').serializeArray(),
        dataType: 'json',
        success: function (data) {
          // eslint-disable-next-line no-console
          console.log('Success', data);
        },

        error: function (error) {
          throw new Error('Error: ' + error.message);
        },
      });
    },
  });

  return $.vaimo.customPostForm;
});
