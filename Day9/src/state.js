// @flow
export type ToDoItem = {
  id: number,
  content: string,
  isDone: boolean,
};

export type State = {
  allItems: Array<ToDoItem>,
  toDoItems: Array<ToDoItem>,
  clearInput: boolean,
};
