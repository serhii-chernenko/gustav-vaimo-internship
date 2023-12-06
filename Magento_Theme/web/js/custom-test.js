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
      console.log(data);
    },

    onDesktop() {
      console.log('desktop');
    },

    onMobile() {
      console.log('mobile');
    },
  });

  return $.vaimo.testWidget;
});
