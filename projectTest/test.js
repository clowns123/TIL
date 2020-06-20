let apiKey = 'api_key=250ed9163433644ad57f1350029b12e8';
let baseUri = 'http://api.themoviedb.org/3';
let imagesUri = 'http://image.tmdb.org/t/p';

let url = '';

fetch(baseUri + url + '?' + apiKey)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(JSON.stringify(myJson));
  });
