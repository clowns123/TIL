let apiKey = 'api_key=250ed9163433644ad57f1350029b12e8';
let lan = '&language=ko-kr'
// --------------------------
// 리스트
let baseUri = 'http://api.themoviedb.org/3';  
// ex : https://api.themoviedb.org/3/list/1?api_key=250ed9163433644ad57f1350029b12e8&language=ko-kr
// list/${랜덤값}을 주면 랜덤으로 가져온다.
// ---------------------------
// 탑리스트(TV)
// https://api.themoviedb.org/3/tv/top_rated?api_key=250ed9163433644ad57f1350029b12e8&language=ko-kr&page=1
// 최신 인기 리스트(TV)
// https://developers.themoviedb.org/3/tv/get-popular-tv-shows
// ---------------------------
// 인기 최신 영화
// https://developers.themoviedb.org/3/movies/get-popular-movies
// ---------------------------
// 예정 영화(한국)
// https://api.themoviedb.org/3/movie/upcoming?api_key=250ed9163433644ad57f1350029b12e8&language=ko-kr&page=1&region=kr
// ---------------------------
// 이미지
let imagesUri = 'http://image.tmdb.org/t/p';
// + width + imageURL
// ex : https://image.tmdb.org/t/p/w500/jwswXltzpGaKZCtz1CiDjXHQYAs.jpg
// ---------------------------
// 
// 검색(영화)
// https://developers.themoviedb.org/3/search/search-movies
//
// 검색(TV쇼)
// https://developers.themoviedb.org/3/search/search-tv-shows






let method = '/list/';
let num = '2';

fetch(baseUri + method + num + '?' + apiKey + lan)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.dir(myJson);
  });


