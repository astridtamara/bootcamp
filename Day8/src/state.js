// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from './main';

type ToDoItem = {
  id: number,
  content: string,
  isDone: boolean,
};

export type State = {
  toDoItems: Array<ToDoItem>,
  newItem: string,
};

let state: State = {
  toDoItems: [
    {id: 1, content: 'Eat', isDone: false},
    {id: 2, content: 'Sleep', isDone: false},
    {id: 3, content: 'Repeat', isDone: false},
  ],
  newItem: '',
};

export function getState(): State {
  return state;
}

export function setState(newState: State) {
  state = newState;
  render();
}
