// @flow

import React from 'react';
import type {Contact} from './contact';

type Props = {
  selectedIdx: number,
  contactList: Array<Contact>,
  changeSelected: (id: number) => void,
};

const listStyle = {
  padding: 3,
  listStyle: 'none',
};

const itemStyle = {
  padding: 8,
  display: 'flex',
};

const selectedItemStyle = {
  ...itemStyle,
  backgroundColor: '#dee9fc',
};

const profilePictStyle = {
  objectFit: 'cover',
  height: 50,
  width: 50,
  borderRadius: 50,
};

const contactInfoStyle = {
  padding: 8,
};

function ContactList(props: Props) {
  let {contactList, changeSelected, selectedIdx} = props;
  return (
    <ul style={listStyle}>
      {contactList.map((contact, index) => {
        return (
          <li
            key={contact.id}
            onClick={() => changeSelected(index)}
            style={selectedIdx === index ? selectedItemStyle : itemStyle}
          >
            <img style={profilePictStyle} src={contact.pict} />
            <div style={contactInfoStyle}>
              <span>
                <b>{contact.name}</b>
              </span>
              <br />
              <span>{contact.phone}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
