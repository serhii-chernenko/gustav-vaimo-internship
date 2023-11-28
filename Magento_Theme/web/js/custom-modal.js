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

    submitForm: function (e) {
      e.preventDefault();
      let newsletterForm = this.element.find('.modal__form');
      let emailInput = newsletterForm.find('input[type="email"]');

      let email = emailInput.val();

      if (this.isValidEmail(email)) {
        this.closeModal();
        newsletterForm.off('submit').on('submit', function () {
          return true;
        });
      }
    },

    isValidEmail: function (email) {
      let re = /\S+@\S+\.\S+/;

      return re.test(email);
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
      this.element.removeClass(this.options.modalOpenClass);
      this.sendModalCookie();
    },
  });

  return $.vaimo.modalWidget;
});
