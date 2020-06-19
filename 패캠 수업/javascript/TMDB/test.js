tmdb.call(
  '/configuration',
  {},
  function (e) {
    console.log('Success: ' + e)
  },
  function (e) {
    console.log('Error: ' + e)
  }
)
