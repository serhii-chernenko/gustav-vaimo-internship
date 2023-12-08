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
      // eslint-disable-next-line no-console
      console.log('Original init method');
      // eslint-disable-next-line no-console
      console.log(this.options);
    },
  });

  return $.vaimo.customWidget;
});
