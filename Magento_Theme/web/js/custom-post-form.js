define(['jquery', 'mage/mage'], function ($) {
  $.widget('vaimo.customPostForm', {
    options: {
      actionUrl: 'https://app.exampleproject.test/testform/index/submit',
    },

    _create() {
      // $('.my-custom-form').mage('validation');
      $('.my-custom-form').on('submit', this.submitForm.bind(this));
    },

    submitForm(e) {
      e.preventDefault();
      // eslint-disable-next-line no-console
      console.log('Form submitted');

      $.ajax({
        url: this.options.actionUrl,
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
