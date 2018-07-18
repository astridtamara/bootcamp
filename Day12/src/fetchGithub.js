// @flow
import 'isomorphic-fetch';

let promise = fetch('https://api.github.com/users/mozilla/repos');

promise
  .then((response) => {
    // console.log('HEADERS RECEIVED');
    // console.log(response.status);
    // console.log(response.headers);

    return response.json();
  })
  .then((repoList) => {
    repoList.forEach(({name, watchers_count}) => {
      console.log('Repo :', name, '(Watchers: ', watchers_count, ')');
    });
  });
