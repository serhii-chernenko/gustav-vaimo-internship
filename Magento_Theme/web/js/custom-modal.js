define(['jquery', 'jquery-ui-modules/widget', 'mage/cookies'], function ($) {
  $.widget('vaimo.modalWidget', {
    options: {
      modalOpenClass: 'modal',
      modalNotOpenClass: 'not-open-modal',
      modalShadowClass: 'modal-shadow',
    },

    _create: function () {
      if (!$.mage.cookies.get('modalClosed')) {
        this.element.css('display', 'block');
        this.addModalShadow();
      }
      this._on({
        'click #close-modal-icon': this.closeModal,
        'click .modal__close-btn': this.closeModal,
        'submit .modal__form': this.submitForm,
      });
    },

    submitForm: function () {
      this.sendModalCookie();
    },

    sendModalCookie: function () {
      if (!$.mage.cookies.get('modalClosed')) {
        $.mage.cookies.set('modalClosed', true, {
          lifetime: 60 * 60 * 24 * 7,
        });
      }
    },

    addModalShadow: function () {
      this.element.addClass(this.options.modalShadowClass);
    },

    closeModal: function () {
      this.sendModalCookie();
      this.element.css('display', 'none');
    },
  });

  return $.vaimo.modalWidget;
});
