// @flow
import React from 'react';

type ItemProps = {
  item: Object,
  toggleDone: (id: number) => void,
};

export default function AddNewItem(props: ItemProps){
  let {item, toggleDone} = props;
  let content = item.isDone? <s>{item.content}</s> : item.content;
  return <li key={item.id} onClick={()=>toggleDone(item.id)}>{content}</li>;
}