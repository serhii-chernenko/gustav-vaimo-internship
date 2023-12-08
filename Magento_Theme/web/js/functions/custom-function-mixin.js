define(['mage/utils/wrapper'], function (wrapper) {
  return function (extendedFunction) {
    return wrapper.wrap(
      extendedFunction,
      function (originalFunction, config, element) {
        // eslint-disable-next-line no-console
        console.log('Before originalFunction');
        originalFunction(config, element);
        // eslint-disable-next-line no-console
        console.log('After originalFunction');
      }
    );
  };
});
