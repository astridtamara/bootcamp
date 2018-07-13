// @flow
import React, {Component} from 'react';
import type {Contact, State} from './contact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

type Props = {};

const pad8 = {
  padding: 8,
};

const boxStyle = {
  display: 'flex',
  padding: 3,
  justifyContent: 'center',
};

class App extends Component<Props, State> {
  state = {
    contactList: [
      {id: 1, name: 'Astrid', phone: '081314214045', pict: 'default.png'},
      {id: 2, name: 'Bud', phone: '081314214022', pict: 'default.png'},
      {id: 3, name: 'Charle', phone: '081314214088', pict: 'default.png'},
    ],
    searchValue: '',
    selectedIdx: 0,
    isAdd: false,
  };

  render() {
    let {contactList, searchValue, selectedIdx, isAdd} = this.state;
    let filterContactList = contactList;
    if (searchValue !== '') {
      filterContactList = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(searchValue),
      );
    }
    let selectedContact = contactList[selectedIdx];
    return (
      <div style={boxStyle}>
        <div>
          <input
            style={pad8}
            type="text"
            placeholder="Search contact..."
            value={searchValue}
            onChange={this._onSearchChange}
          />
          <ContactList
            contactList={filterContactList}
            selectedIdx={selectedIdx}
            changeSelected={this._changeSelected}
          />
          <button style={pad8} onClick={this._onButtonAddClick}>
            Add New Contact
          </button>
        </div>
        <ContactDetail
          isAdd={isAdd}
          selectedContact={selectedContact}
          onAddContact={this._onAddContact}
          onBtnCancelClick={this._onBtnCancelClick}
        />
      </div>
    );
  }

  _onSearchChange = (event: Object) => {
    this.setState({searchValue: event.target.value});
  };

  _changeSelected = (id: number) => {
    this.setState({selectedIdx: id, isAdd: false});
  };

  _onButtonAddClick = () => {
    this.setState({isAdd: true});
  };

  _onAddContact = (name: string, phone: string, pict: string) => {
    console.log(pict);
    let {contactList} = this.state;
    let newContact = {
      id: contactList.length + 1,
      name,
      phone,
      pict,
    };
    this.setState({contactList: [...contactList, newContact], isAdd: false});
  };

  _onBtnCancelClick = () => {
    this.setState({isAdd: false});
  };
}

export default App;
