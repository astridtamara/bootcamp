// @flow

import {getUserRepos} from '../getUserRepo';

it('should wait then fetch then wait', () => {
  let userID = 'sstur';
  let gen = getUserRepos(userID);
  expect(gen.next()).toEqual({
    done: false,
    value: {
      type: 'WAIT',
      ms: 200,
    },
  });
  expect(gen.next()).toEqual({
    done: false,
    value: {
      type: 'FETCH',
      url: `https://api.github.com/users/${userID}/repos`,
    },
  });
  let mockData = [{name: 'foo'}];
  expect(gen.next(mockData)).toEqual({
    done: false,
    value: {
      type: 'WAIT',
      ms: 300,
    },
  });
  expect(gen.next()).toEqual({
    done: true,
    value: ['foo'],
  });
});
