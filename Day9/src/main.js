// @flow
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

let container = document.createElement('div');
if (document.body) {
  document.body.appendChild(container);
}

ReactDOM.render(<App />, container);
