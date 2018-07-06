// @flow

import {DataStore} from '../dataStore';

it('return undefined for data that does not exist', () => {
  let newData = new DataStore();
  newData.set('Apple', 500);
  newData.set('Banana', 1200);
  expect(newData.get('Mango')).toEqual(undefined);
});

it('should get value of key Apple and return 500', () => {
  let newData = new DataStore();
  newData.set('Apple', 500);
  newData.set('Banana', 1200);
  expect(newData.get('Apple')).toEqual(500);
});

it('should loop data', () => {
  let newData = new DataStore();
  newData.set('Apple', 500);
  newData.set('Banana', 1200);
  let result = [];
  newData.forEach((key, value) => {
    result.push([key, value]);
  });
  expect(result).toEqual([['Apple', 500], ['Banana', 1200]]);
});

it('should loop twice', () => {
  let newData = new DataStore();
  newData.set('Apple', 500);
  newData.set('Banana', 1200);
  let mockFunction = jest.fn();
  newData.forEach(mockFunction);
  expect(mockFunction.mock.calls.length).toEqual(2);
  expect(mockFunction.mock.calls[0]).toEqual(['Apple', 500]);
});
