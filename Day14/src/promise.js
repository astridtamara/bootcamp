// @flow

let promise = Promise.resolve(['test', 'lalala']);

promise
  .then((result) => {
    console.log('First promise :', result);
    // throw new Error('The world bhay');
    // return Promise.resolve('9');
    return Promise.all(
      result.map((res) => {
        return Promise.resolve(res.length);
      }),
    );
  })
  .then((result) => {
    console.log('Second promise :', result);
    console.log(result === undefined);
  })
  .catch((err) => {
    console.log('ERROR :', err);
  });
