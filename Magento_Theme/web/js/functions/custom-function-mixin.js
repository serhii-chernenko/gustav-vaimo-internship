define(['mage/utils/wrapper'], function (wrapper) {
  return function (extendedFunction) {
    return wrapper.wrap(
      extendedFunction,
      function (originalFunction, config, element) {
        console.log('Before originalFunction');
        originalFunction(config, element);
        console.log('After originalFunction');
      }
    );
  };
});
