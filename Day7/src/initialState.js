// @flow
import type {State} from './types/State';
import type {ToDoList} from './types/ToDoItem';

// let initialState : State = {
//     name: 'Budi',
//     counter: 1,
// }

let initialState : ToDoList = {
    toDoItems: [
        {id: 4, name: 'Buy Oreos', isDone: false},
        {id: 9, name: 'Teach Bootcamp', isDone: false},
        {id: 1, name: 'Clean Laptop', isDone: false},
    ]
};

export default initialState;