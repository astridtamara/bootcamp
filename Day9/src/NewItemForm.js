// @flow
import React, {Component} from 'react';

type Props = {
  onAddItem: (content: string) => void,
  clearInput: boolean,
};
type State = {
  newItem: string,
};

class NewItemForm extends Component<Props, State> {
  state = {
    newItem: '',
  };
  render() {
    if (this.props.clearInput) {
      this.setState({newItem: ''});
      this.props.clearInput = false;
    }
    return (
      <div>
        <input
          type="text"
          value={this.state.newItem}
          onChange={this.textChange}
        />
        <button name="submit" onClick={this._onSubmit}>
          Add
        </button>
      </div>
    );
  }

  textChange = (event: Object) => {
    this.setState({newItem: event.target.value});
  };

  _onSubmit = () => {
    this.props.onAddItem(this.state.newItem);
    this.setState({newItem: ''});
  };
}

export default NewItemForm;
