try {
  new Promise((resolve, reject) => {
    reject('err');
  });
} catch (e) {
  console.log(e);
}
