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
      console.log('Form submitted');

      $.ajax({
        url: this.options.actionUrl,
        type: 'POST',
        data: $('.my-custom-form').serializeArray(),
        dataType: 'json',
        success: function (data) {
          console.log('Success', data);
        },

        error: function (error) {
          console.log('Error', error);
        },
      });
    },
  });

  return $.vaimo.customPostForm;
});
