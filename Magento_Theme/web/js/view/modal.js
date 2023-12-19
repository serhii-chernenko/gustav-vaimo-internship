define([
  'ko',
  'uiElement',
  'jquery',
  'mage/translate',
  'Magento_Customer/js/customer-data',
  'validation',
  'Magento_Ui/js/modal/modal',
], (ko, uiElement, $, $t, customerData) => {
  'use strict';

  return uiElement.extend({
    defaults: {
      template: 'Magento_Theme/modal',
      modal: null,
      form: null,
      id: null,
      title: '',
      backupTitle: '',
      editMode: false,
      modalOptions: {
        clickableOverlay: false,
        buttons: [],
        keyEventHandlers: {
          escapeKey() {},
        },
      },
      tracks: {
        id: true,
        editMode: true,
        title: true,
        backupTitle: true,
      },
      modules: {
        todoComponent: '${ $.provider }',
      },
    },

    initObservable() {
      this._super();

      this.modalTitle = ko.pureComputed(() => {
        return this.editMode
          ? $t('Edit %1').replace('%1', this.backupTitle)
          : $t('Add');
      });

      this.ctaTitle = ko.pureComputed(() => {
        return this.editMode ? $t('Edit') : $t('Add');
      });

      this.fieldId = ko.pureComputed(() => {
        return this.editMode ? `field_${this.id}` : 'field';
      });

      return this;
    },

    refModal(modal) {
      this.modal = $(modal).modal(this.modalOptions);
    },

    refForm(form) {
      this.form = $(form);
    },

    reset() {
      this.id = null;
      this.title = '';
      this.backupTitle = '';
      this.form.validation('clearError');
      this.editMode = false;

      this.form.find('.field-error')?.remove();
      this.form.find('.mage-error')?.removeClass('mage-error');
    },

    add() {
      this.reset();
      this.modal.modal('openModal');
    },

    edit(id) {
      const item = this.todoComponent().findTodoById(id);

      if (!item) {
        return this.displayMessage();
      }

      this.id = item.id;
      this.backupTitle = item.title;
      this.title = this.backupTitle;
      this.editMode = true;
      this.modal.modal('openModal');
    },

    displayMessage(type = 'error', text = $t('Something went wrong')) {
      const messagesSection = customerData.get('messages')() ?? {};
      const messages = messagesSection.messages ?? [];

      customerData.set('messages', {
        ...messages,
        messages: [
          {
            type,
            text,
          },
        ],
      });
    },

    submit() {
      const isEditMode = this.editMode;
      let isAdded;

      if (!this.form.validation('isValid')) {
        return this;
      }

      if (isEditMode) {
        isAdded = this.todoComponent().findTodoByIdAndUpdate(this.id, {
          title: this.title,
        });
      } else {
        isAdded = this.todoComponent().createTodo({
          title: this.title,
        });
      }

      this.close();

      return isAdded
        ? this.displayMessage(
            'success',
            isEditMode ? $t('Item updated') : $t('Item added')
          )
        : this.displayMessage();
    },

    close() {
      this.modal.modal('closeModal');
      this.reset();
    },
  });
});
