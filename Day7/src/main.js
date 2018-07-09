// @flow
import renderApp from './App';
import eventHandlers from './eventHandlers';
import initialState from './initialState';
import type {State} from './types/State';

let state = initialState;

// global.changeName = () => {
//   state.name = 'Yosua';
//   console.log('Name has been changed succesfully');
//   render();
// }

global.emitEvent = (eventName, id) => {
  let eventHandler = eventHandlers[eventName];
  if(eventHandler) {
    state = eventHandler(state, id);
    render();
  }
}


function render(){
  let html = renderApp(state);
  if(document.body){
      document.body.innerHTML = html;
  }
}

render();