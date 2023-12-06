define(['ko'], function (ko) {
  return function () {
    const message = ko.observable('Hello Knockout world! ');

    return {
      message: message,
    };
  };
});
