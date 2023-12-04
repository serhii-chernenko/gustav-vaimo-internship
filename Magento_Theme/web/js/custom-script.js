const noRouteParagraphParentRow = document.querySelector('.no-route-page-text');
const noRouteParagraph = noRouteParagraphParentRow.querySelector('p');

noRouteParagraph.innerHTML = noRouteParagraph.innerHTML.replace(
  /(SPACE)/,
  '<span class="no-route-space-word">$1</span>'
);

define(['jquery'], $ => {
  return () => {
    $('.no-route-page-title').click(function () {
      $(this).hide();
    });
  };
});
