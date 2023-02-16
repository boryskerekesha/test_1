'use strict'
const isValidUrl = (urlString) => {
  try {
    return Boolean(new URL(urlString)); 
  }
  catch {
    return false;
  }
}

function getObjParamsExample(url) {
  const searchParamsUrl = url.split('?');
  searchParamsUrl.shift()

  if (!isValidUrl(url) || searchParamsUrl.length > 1) {
    return 'It is not valid url';
  }
  const params = Object.fromEntries(new URLSearchParams(searchParamsUrl.join()));

  return params;
};

console.log(getObjParamsExample('http://localhost:63342/test/index.html?em=world&ew=book'));
console.log(getObjParamsExample('http://localhost:63342/test/index.html?em=world&?ew=book'));
console.log(getObjParamsExample('https://boryskerekesha.github.io/react_people-table-advanced/#/people/pieter-bernard-haverbeke-1695?centuries=16&centuries=17&centuries=18&centuries=19&centuries=20&sex=f'));

function getObjParamsRealUrl() {
  const params = Object.fromEntries(new URLSearchParams(window.location.search));

  return params;
};
