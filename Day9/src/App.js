// @flow
import React, {Component} from 'react';
import type {State} from './state';
import ToDoItem from './ToDoItem';
import NewItemForm from './newItemForm';

type Props = {};

class App extends Component<Props, State> {
  state = {
    allItems: [
      {id: 1, content: 'Study', isDone: false},
      {id: 2, content: 'Work', isDone: false},
      {id: 3, content: 'Sleep', isDone: false},
    ],
    toDoItems: [
      {id: 1, content: 'Study', isDone: false},
      {id: 2, content: 'Work', isDone: false},
      {id: 3, content: 'Sleep', isDone: false},
    ],
    clearInput: false,
  };
  
  render() {
    let {toDoItems} = this.state;
    return (
      <div>
        <input type="text" placeholder="Search" onChange={this._onSearch} />
        <ul>
          {toDoItems.map((item) => {
            if (!item.isDone) {
              return <ToDoItem item={item} toggleDone={this._onToggleDone} />;
            }
          })}
          {toDoItems.map((item) => {
            if (item.isDone) {
              return <ToDoItem item={item} toggleDone={this._onToggleDone} />;
            }
          })}
        </ul>
        <NewItemForm
          onAddItem={this._onAddItem}
          clearInput={this.state.clearInput}
        />
        <button onClick={this._onClearInput}>Clear Input</button>
      </div>
    );
  }

  _onToggleDone = (id: number) => {
    let newToDoItems = this.state.allItems.map((item) => {
      let result = id === item.id ? {...item, isDone: !item.isDone} : item;
      return result;
    });
    this.setState({
      ...this.state,
      allItems: newToDoItems,
      toDoItems: newToDoItems,
    });
  };

  _onAddItem = (content: string) => {
    let newToDoItem = {
      id: this.state.allItems[this.state.allItems.length - 1].id + 1,
      content,
      isDone: false,
    };
    this.setState({
      ...this.state,
      allItems: [...this.state.allItems, newToDoItem],
      toDoItems: [...this.state.toDoItems, newToDoItem],
    });
  };

  _onSearch = (event: Object) => {
    let keyword = event.target.value.toLowerCase();

    let newToDoItems = this.state.allItems.filter(({content}) => {
      return content.toLowerCase().indexOf(keyword) !== -1;
    });
    this.setState({...this.state, toDoItems: newToDoItems});
  };

  _onClearInput = () => {
    this.setState({clearInput: true});
  };
}

export default App;
