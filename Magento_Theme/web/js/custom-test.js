define([
  'jquery',
  'mage/url',
  'matchMedia',
  'mage/translate',
  'mage/cookies',
  'jquery-ui-modules/widget',
], function ($, urlBuilder, mediaCheck) {
  'use strict';
  $.widget('vaimo.testWidget', {
    options: {
      test: 'Hello!!!',
      breakpoint: '(min-width: 768px)',
    },

    _create: function () {
      mediaCheck({
        media: this.options.breakpoint,
        entry: this.onDesktop.bind(this),
        exit: this.onMobile.bind(this),
      });
    },

    _init: function () {
      $.ajax({
        url: urlBuilder.build('/rest/all/V1/directory/countries/SE'),
        success: this.onSuccess.bind(this),
      });
    },

    onSuccess(data) {
      // eslint-disable-next-line no-console
      console.log(data);
    },

    onDesktop() {
      // eslint-disable-next-line no-console
      console.log('desktop');
    },

    onMobile() {
      // eslint-disable-next-line no-console
      console.log('mobile');
    },
  });

  return $.vaimo.testWidget;
});
