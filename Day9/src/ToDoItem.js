// @flow
import React, {Component} from 'react';

type ItemProps = {
  item: Object,
  toggleDone: (id: number) => void,
};

// class ToDoItem extends Component <ItemProps> {

// }

function ToDoItem(props: ItemProps){
  let {item, toggleDone} = props;
  let content = item.isDone? <s>{item.content}</s> : item.content;
  return <li key={item.id} onClick={()=>toggleDone(item.id)}>{content}</li>;
}


export default ToDoItem;