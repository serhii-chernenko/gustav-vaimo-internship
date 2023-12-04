define(['jquery', 'jquery-ui-modules/widget', 'mage/cookies'], function ($) {
  $.widget('vaimo.modalWidget', {
    options: {
      modalOpenClass: 'modal',
      modalNotOpenClass: 'not-open-modal',
      modalShadowClass: 'modal-shadow',
      modalCookie: 'modalClosed',
    },

    _create() {
      if (!$.mage.cookies.get(this.options.modalCookie)) {
        this.element.show();
        this.addModalShadow();
        $('.modal__button').attr('title', 'JOIN');
      }
      this._on({
        'click #close-modal-icon': this.closeModal.bind(this),
        'click .modal__close-btn': this.closeModal.bind(this),
        'submit .modal__form': this.sendModalCookie.bind(this),
      });
    },

    sendModalCookie() {
      if ($.mage.cookies.get(this.options.modalCookie)) {
        return this;
      }
      $.mage.cookies.set(this.options.modalCookie, true, {
        lifetime: 60 * 60 * 24 * 7,
      });
    },

    addModalShadow() {
      this.element.addClass(this.options.modalShadowClass);
    },

    closeModal() {
      this.sendModalCookie();
      this.element.hide();
    },
  });

  return $.vaimo.modalWidget;
});
