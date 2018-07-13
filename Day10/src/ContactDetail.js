// @flow

import React, {Component} from 'react';
import type {Contact} from './contact';

type Props = {
  selectedContact: Contact,
  isAdd: boolean,
  onAddContact: (name: string, phone: string, pict: string) => void,
  onBtnCancelClick: () => void,
};

type State = {
  newName: string,
  newPhone: string,
  newPict: string,
};

const itemStyle = {
  margin: 8,
  padding: 8,
  display: 'flex',
  flexDirection: 'column',
};
const profilePictStyle = {
  padding: 8,
  objectFit: 'cover',
  height: 150,
  width: 150,
  borderRadius: 150,
};
const pad8 = {
  padding: 8,
};

class ContactDetail extends Component<Props, State> {
  state = {
    newName: '',
    newPhone: '',
    newPict: 'default.png',
  };

  render() {
    let {newName, newPhone, newPict} = this.state;
    let {selectedContact, isAdd, onAddContact, onBtnCancelClick} = this.props;
    if (isAdd) {
      return (
        <div>
          <label>Name </label>
          <input
            style={pad8}
            type="text"
            placeholder="Name"
            value={newName}
            onChange={this._onNameChange}
          />
          <br />
          <label>Phone </label>
          <input
            style={pad8}
            type="text"
            placeholder="Phone Number"
            value={newPhone}
            onChange={this._onPhoneChange}
          />
          <br />
          {/* <label>Pict </label>
          <input
            style={pad8}
            type="file"
            placeholder="Profile Picture"
            value={newPict}
            onChange={this._onPictChange}
          />
          <br /> */}
          <button
            onClick={() => onAddContact(newName, newPhone, newPict)}
            style={pad8}
          >
            Add
          </button>
          <button onClick={() => onBtnCancelClick()} style={pad8}>
            Cancel
          </button>
        </div>
      );
    } else {
      let {id, name, phone, pict} = selectedContact;
      return (
        <div>
          <b>Contact Detail:</b>
          <br />
          <div style={itemStyle}>
            <img style={profilePictStyle} src={pict} />
            <span>
              <b>{name}</b>
            </span>
            <br />
            <span>{phone}</span>
          </div>
        </div>
      );
    }
  }

  _onNameChange = (event: Object) => {
    let value = event.target.value;
    this.setState({newName: value});
  };

  _onPhoneChange = (event: Object) => {
    let value = event.target.value;
    this.setState({newPhone: value});
  };

  _onPictChange = (event: Object) => {
    let value = event.target.value;
    this.setState({newPict: value});
  };
}

export default ContactDetail;
