// @flow
import React, {Component} from 'react';

type Props = {
  onAddItem: (content: string) => void,
  onTextChange: (content: string) => void,
  newItem: string,
};

function NewItemForm(props: Props) {
  let onTextChange = (event: Object) => {
    props.onTextChange(event.target.value);
  };
  let _onSubmit = () => {
    props.onAddItem(this.props.newItem);
    props.onTextChange('');
  };
  return (
    <div>
      <input type="text" value={props.newItem} onChange={onTextChange} />
      <button name="submit" onClick={_onSubmit}>
        Add
      </button>
    </div>
  );
}

export default NewItemForm;
