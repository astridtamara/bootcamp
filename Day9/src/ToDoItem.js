// @flow
import React, {Component} from 'react';

type ItemProps = {
  item: Object,
  isSelected: boolean,
  toggleDone: (id: number) => void,
};

const commonStyle = {
  margin: 0,
  padding: 3,
  listStyle: 'none',
}

const unselectedStyle = {
  ...commonStyle,
  backgroundColor: 'transparent',
  color: 'black',
}

const selectedStyle = {
  ...commonStyle,
  backgroundColor: '#008000',
  color: 'white',

}

function ToDoItem(props: ItemProps){
  let {isSelected, item, toggleDone} = props;
  let style = isSelected? selectedStyle : unselectedStyle;
  let content = item.isDone? <s>{item.content}</s> : item.content;
  return <li key={item.id} style={style} onClick={()=>toggleDone(item.id)}>{content}</li>;
}


export default ToDoItem;