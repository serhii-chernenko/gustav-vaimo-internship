define(['uiComponent'], uiComponent => {
  return uiComponent.extend({
    defaults: {
      template: 'Magento_Theme/custom-component-layout',
      todos: [],
    },
  });
});
