// @flow
import 'isomorphic-fetch';

type Action = {type: 'WAIT', ms: number} | {type: 'FETCH', url: string};

export function* getUserRepos(userID: string) {
  yield {type: 'WAIT', ms: 200};
  let repos = yield {
    type: 'FETCH',
    url: `https://api.github.com/users/${userID}/repos`,
  };
  yield {type: 'WAIT', ms: 300};
  return repos.map((repo) => repo.name);
}

function wrap(genFuct) {
  return (...args) => run(genFuct(...args));
}

function run(gen): Promise<mixed> {
  return new Promise((resolve, reject) => {
    function processNextResult(data) {
      let {done, value} = gen.next(data);
      if (!done && value) {
        switch (value.type) {
          case 'WAIT':
            setTimeout(() => {
              processNextResult();
            }, value.ms);
            break;
          case 'FETCH':
            fetch(value.url)
              .then((res) => res.json())
              .then((repo) => {
                processNextResult(repo);
              });
            break;
        }
      } else resolve(value);
    }
    processNextResult();
  });
}

// let promise: Promise<mixed> = run(getUserRepos('sstur'));

// getUserRepos('sstur').then((result) => {
//   console.log(result);
// });

export default wrap(getUserRepos);
