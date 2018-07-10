// @flow
import type {ToDoItem, ToDoList} from './types/ToDoItem';

type UpdateFunction = (ToDoList, data: ?mixed) => ToDoList;
type EventHandlerObject = {[eventName: string]: UpdateFunction};

let eventHandlers: EventHandlerObject = {
  //   increaseCount: (oldState) => {
  //     return {name: oldState.name, counter: oldState.counter + 1};
  //   },
  //   decreaseCount: (oldState) => {
  //     return {name: oldState.name, counter: oldState.counter - 1};
  //   },
  toggleDone: (oldState, id) => {
    let newToDoList = oldState.toDoItems.map((item) => {
      let result = item.id === id ? {...item, isDone: !item.isDone} : item;
      return result;
    });
    return {...oldState, toDoItems: newToDoList};
  },
  getItem: (oldState, value) => {
    return {...oldState, newItem: String(value)};
  },
  addItem: (oldState) => {
    let newToDoItem: ToDoItem = {
      id: oldState.toDoItems[oldState.toDoItems.length - 1].id + 1,
      name: oldState.newItem,
      isDone: false,
    };
    return {...oldState, toDoItems: [...oldState.toDoItems, newToDoItem], newItem : ''};
  },
};

export default eventHandlers;
