const a = '1';
const b = '2';
const timeoutPromise = new Promise((res, rev) => {
  setTimeout(() => {
    res('1s');
  }, 1000);
});
timeoutPromise.then(console.log);
