define(['uiElement'], (uiElement) => {
    return uiElement.extend({
        defaults: {
            template: 'Magento_Theme/todo/item',
            modules: {
                modal: '${ $.provider }'
            },
        },

        edit() {
            this.modal().edit(this.id);
        }
    });
})
