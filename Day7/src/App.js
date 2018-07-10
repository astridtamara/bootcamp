// @flow
import type {ToDoItem, ToDoList} from './types/ToDoItem';

function renderToDo(item: ToDoItem){
  let content = item.isDone? `<s>${item.name}</s>` : item.name;
  return `<li onClick="emitEvent('toggleDone', ${item.id})">${content}</li>`;
}

function renderTextInput(state: ToDoList){
  return `<input type="text" value="${state.newItem}" onBlur="emitEvent('getItem', this.value)"/>`;
}

function renderButton(){
  return `<button name="submit" onClick="emitEvent('addItem')">Add</button>`
}

function renderApp(state: ToDoList){
    return `<ul>
          ${state.toDoItems.map( (item) => renderToDo(item)).join('')}  
          </ul>
          ${renderTextInput(state)}
          ${renderButton()}`;
}

export default renderApp;