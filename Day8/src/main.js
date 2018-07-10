// @flow
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import {getState} from './state.js';

let container = document.createElement('div');
if (document.body) {
  document.body.appendChild(container);
}


export function render() {
  if (container) {
    ReactDOM.render(<App state={getState()} />, container);
  }
}

render();
