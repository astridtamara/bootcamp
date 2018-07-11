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
  let textChange = (event) => {
    setState({...state, newItem : event.target.value});
  }
  let addItem = () => {
    let newToDoItem = {
      id: state.toDoItems[state.toDoItems.length - 1].id + 1,
      content: state.newItem,
      isDone: false,
    };
    setState({...state, toDoItems: [...state.toDoItems, newToDoItem], newItem : ''});
  }
  return (
    <div>
      <ul>
        {toDoItems.map((item) => <ToDoItem item={item} toggleDone={toggleDone}/>)}
      </ul>
      <input type="text" value={state.newItem} onChange={evt => textChange(evt)}/>
      <button name="submit" onClick={()=>addItem()}>Add</button>
    </div>
  );
}

export default App;
