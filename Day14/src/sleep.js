// @flow

function sleep(ms: number, result: mixed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, ms);
  });
}

let newPromise = Promise.all([sleep(100, 'apple'), sleep(500, 'grape')]);

newPromise
  .then((result) => {
    console.log('Resolve Promise.race');
    console.log(result);
  })
  .catch((err) => {
    console.log('ERROR', err);
  });

// sleep(50)
//   .then(() => {
//     console.log('Sleep finished');
//     // return new Promise((resolve, reject) => {
//     //   reject('nope');
//     // });
//     return Promise.reject('nay');
//     // throw new Error("wow");
//   })
//   .then(() => {
//     console.log('Are we still chaining?');
//   })
//   .catch((err) => {
//     console.log('ERROR', err);
//   });

export default sleep;
