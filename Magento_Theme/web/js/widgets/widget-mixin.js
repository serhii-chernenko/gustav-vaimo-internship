define(['jquery'], function ($) {
  const widgetMixin = {
    options: {
      str1: '4321',
    },
    _heat() {
      console.log('log before init');
      this._super();
      console.log('log after init');
    },
  };

  return function (originalWidget) {
    $.widget('vaimo.customWidget', originalWidget, widgetMixin);

    return $.vaimo.customWidget;
  };
});
