function getList(isTv, isRate) {
  const LANGUAGE = '&language=ko-kr';
  const BASEURL = 'http://api.themoviedb.org/3';
  const IMAGEURL = 'http://image.tmdb.org/t/p';
  const APIKEY = 'api_key=250ed9163433644ad57f1350029b12e8';
  const REGION = '&region=kr';

  // _kind
  const MOVIE = 'movie';
  const TV = 'tv';

  // _isRate
  const POPULAR = 'popular';
  const RATED = 'top_rated';

  let kind = isTv ? TV : MOVIE;
  let what = isRate ? RATED : POPULAR;

  async function lists() {
    let fullUrl = `${BASEURL}/${kind}/${what}?${APIKEY}${LANGUAGE}&page=1`;
    if (kind === MOVIE) fullUrl += REGION;
    let kindList = {};
    let tvPromise = await fetch(fullUrl);
    kindList = await tvPromise.json().then((list) => list.results);
    return kindList;
  }

  async function images() {
    let width = 500;
    let fullUrl = `${BASEURL}/${kind}/${what}?${APIKEY}${LANGUAGE}&page=1`;
    let kindList = {};
    let imageList = [];
    if (kind === MOVIE) fullUrl += REGION;
    let tvPromise = await fetch(fullUrl);
    kindList = await tvPromise.json().then((list) => list.results);
    imageList = kindList.map(
      (list) => `${IMAGEURL}/w${width}${list.poster_path}`
    );
    return imageList;
  }

  async function mainList() {
    const MIN = 0;
    const MAX = 19;
    let num = Math.round(Math.random() * (MAX - MIN));
    // movie tap rated : https://api.themoviedb.org/3/movie/top_rated?api_key=250ed9163433644ad57f1350029b12e8&language=ko-kr&page=1&region=kr
    // movie popular : https://api.themoviedb.org/3/movie/popular?api_key=250ed9163433644ad57f1350029b12e8&language=ko-kr&page=1&region=kr
    // tv tap rated : https://api.themoviedb.org/3/tv/top_rated?api_key=250ed9163433644ad57f1350029b12e8&language=ko-kr&page=1
    // tv pipular : https://api.themoviedb.org/3/tv/popular?api_key=250ed9163433644ad57f1350029b12e8&language=ko-kr&page=1

    let fullUrl = [
      'https://api.themoviedb.org/3/movie/top_rated?api_key=250ed9163433644ad57f1350029b12e8&language=ko-kr&page=1&region=kr',
      'https://api.themoviedb.org/3/movie/popular?api_key=250ed9163433644ad57f1350029b12e8&language=ko-kr&page=1&region=kr',
      'https://api.themoviedb.org/3/tv/top_rated?api_key=250ed9163433644ad57f1350029b12e8&language=ko-kr&page=1',
      'https://api.themoviedb.org/3/tv/popular?api_key=250ed9163433644ad57f1350029b12e8&language=ko-kr&page=1',
    ];
    let kindList = [];
    fullUrl.forEach((url) => {});

    let tvPromise = await fetch(fullUrl);
    kindList = await tvPromise.json().then((list) => list.results);
  }

  return {
    lists,
    images,
    mainList,
  };
}

async function init() {
  let getTest = getList(true, false);
  console.log(await getTest.lists());
  console.log(await getTest.images());
  console.log(await getTest.mainList());
}
init();
