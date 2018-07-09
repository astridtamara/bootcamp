// @flow
import type {ToDoItem, ToDoList} from './types/ToDoItem';

function renderToDo(item: ToDoItem){
  console.log(item);
  let content = item.isDone? `<s>${item.name}<s>` : item.name;
  return `<li onClick="emitEvent('toggleDone', ${item.id})">${content}</li>`;
}

function renderApp(state: ToDoList){
    return `<ul>
          ${state.toDoItems.map( (item) => renderToDo(item)).join('')}  
          </ul>`;
}

export default renderApp;