// @flow
import React from 'react';
import {setState} from './state';
import type {State} from './state';
import ToDoItem from './toDoItem';

type Props = {
  state: State,
};

function App(props: Props) {
  let {state} = props;
  let {toDoItems} = state;
  let toggleDone = (id) => {
    let newToDoItems = state.toDoItems.map((item) => {
      let result = id===item.id? {...item, isDone: !item.isDone} : item;
      return result;
    });
    setState({...state, toDoItems: newToDoItems});
  }
  return (
    <ul>
      {toDoItems.map((item) => <ToDoItem item={item} toggleDone={toggleDone}/>)}
    </ul>
  );
}

export default App;
