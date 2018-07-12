// @flow
import React, {Component} from 'react';
import type {State} from './state';
import ToDoItem from './ToDoItem';
import NewItemForm from './newItemForm';

type Props = {};

const listStyle = {
  padding: 3,
  listStyle: 'none',
};

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
    newItem: '',
    selectedIdx: 0,
  };

  componentDidMount() {
    document.addEventListener('keyup', this._onKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this._onKeyUp);
  }

  _onKeyUp = (event: Object) => {
    let {selectedIdx, toDoItems} = this.state;
    let maxIdx = toDoItems.length - 1;
    let newIdx = selectedIdx;
    if (event.key === 'ArrowUp') {
      newIdx = Math.max(0, selectedIdx - 1);
    }
    if (event.key === 'ArrowDown') {
      newIdx = Math.min(selectedIdx + 1, maxIdx);
    }
    if (newIdx !== selectedIdx && document.activeElement === document.body) {
      this.setState({selectedIdx: newIdx});
    }
    if (event.key === ' ' && document.activeElement === document.body) {
      let notDoneItems = toDoItems.filter((item) => !item.isDone);
      let doneItems = toDoItems.filter((item) => item.isDone);
      let newToDoItems = [...notDoneItems, ...doneItems];
      let selectedItem = newToDoItems[selectedIdx];
      this._onToggleDone(selectedItem.id);
    }
  };

  render() {
    let {toDoItems, selectedIdx} = this.state;
    let notDoneItems = toDoItems.filter((item) => !item.isDone);
    let doneItems = toDoItems.filter((item) => item.isDone);
    let newToDoItems = [...notDoneItems, ...doneItems];
    return (
      <div>
        <input type="text" placeholder="Search" onChange={this._onSearch} />
        <ul style={listStyle}>
          {newToDoItems.map((item, index) => {
            let isSelected = selectedIdx === index ? true : false;
            return (
              <ToDoItem
                item={item}
                isSelected={isSelected}
                toggleDone={this._onToggleDone}
              />
            );
          })}
        </ul>
        <NewItemForm
          onAddItem={this._onAddItem}
          onTextChange={this._onTextChange}
          newItem={this.state.newItem}
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
    this.setState({newItem: ''});
  };

  _onTextChange = (content: string) => {
    this.setState({newItem: content});
  };
}

export default App;
