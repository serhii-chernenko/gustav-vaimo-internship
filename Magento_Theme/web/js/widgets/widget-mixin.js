define(['jquery'], function ($) {
  const widgetMixin = {
    options: {
      str1: '4321',
    },
    _heat() {
      // eslint-disable-next-line no-console
      console.log('log before init');
      this._super();
      // eslint-disable-next-line no-console
      console.log('log after init');
    },
  };

  return function (originalWidget) {
    $.widget('vaimo.customWidget', originalWidget, widgetMixin);

    return $.vaimo.customWidget;
  };
});
