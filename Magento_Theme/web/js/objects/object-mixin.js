define(['mage/utils/wrapper'], function (wrapper) {
  'use strict';

  return function (originalObject) {
    originalObject.getData = wrapper.wrapSuper(
      originalObject.getData,
      function () {
        const originalArray = this._super();

        originalArray.push('item 4');

        return originalArray;
      }
    );

    return originalObject;
  };
});
