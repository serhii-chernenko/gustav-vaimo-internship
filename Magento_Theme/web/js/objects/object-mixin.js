define(['mage/utils/wrapper'], function (wrapper) {
  'use strict';

  return function (originalObject) {
    originalObject.getData = wrapper.wrapSuper(
      originalObject.getData,
      function () {
        const originalArray = this._super();

        console.log('Original Array: ', originalArray);
        console.log('OriginalObject: ', originalObject.getData);
        originalArray.push('item 4');

        return originalArray;
      }
    );

    return originalObject;
  };
});
