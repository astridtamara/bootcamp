// @flow
import type {ToDoItem, ToDoList} from './types/ToDoItem';

type UpdateFunction = (ToDoList, number) => ToDoList;
type EventHandlerObject = { [eventName: string]: UpdateFunction};

let eventHandlers : EventHandlerObject = {
//   increaseCount: (oldState) => {
//     return {name: oldState.name, counter: oldState.counter + 1};
//   },
//   decreaseCount: (oldState) => {
//     return {name: oldState.name, counter: oldState.counter - 1};
//   },
    toggleDone: (oldState, id) => {
        let newToDoList = oldState.toDoItems.map((item) => {
            let result = {};
            item.id === id? result = {...item, isDone: !item.isDone} : result = item;
            return result;
        })
        return {...oldState, toDoItems: newToDoList};
    },
};

export default eventHandlers;