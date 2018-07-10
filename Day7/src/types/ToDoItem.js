// @flow

export type ToDoItem = {
    id: number,
    name: string,
    isDone: boolean,
};

export type ToDoList = {
    toDoItems: Array<ToDoItem>,
    newItem : string,
}