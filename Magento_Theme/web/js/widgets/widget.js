define(['jquery', 'jquery-ui-modules/widget'], function ($) {
  $.widget('vaimo.customWidget', {
    options: {
      str1: '1234',
      str2: '4321',
    },

    _create() {
      this._heat();
    },

    _heat() {
      console.log('Original init method');
      console.log(this.options);
    },
  });

  return $.vaimo.customWidget;
});
