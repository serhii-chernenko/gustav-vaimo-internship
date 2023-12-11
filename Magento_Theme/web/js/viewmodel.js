define(['ko'], function (ko) {
  return function () {
    const message = ko.observable('Hello Knockout world! ');

    const getTemplate = function () {
      return 'Magento_Theme/mytemplate';
    };

    return {
      message: message,
      getTemplate: getTemplate,
    };
  };
});
