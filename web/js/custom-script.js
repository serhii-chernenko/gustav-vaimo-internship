let noRouteParagraph = document.querySelector('p');

let noRouteText = noRouteParagraph.innerHTML;

let noRouteTextArray = noRouteText.split(' ');

if (noRouteTextArray.length >= 3) {
  let spaceText = noRouteTextArray[2];

  if (spaceText === 'SPACE') {
    let newNoRouteText = noRouteText.replace(
      'SPACE',
      "<span class='no-route-space-word'>SPACE</span>"
    );

    noRouteParagraph.innerHTML = newNoRouteText;
  }
}
