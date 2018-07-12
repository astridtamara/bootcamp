// @flow
import React from 'react';
import {shallow} from 'enzyme';

import NewItemForm from '../NewItemForm';

it('should render a form', () => {
  let onTextChange = () => {};
  let _onSubmit = () => {};
  let wrapper = shallow(
    <NewItemForm
      onAddItem={_onSubmit}
      onTextChange={onTextChange}
      newItem=""
    />,
  );
  expect(
    wrapper.matchesElement(
      <div>
        <input type="text" value="" onChange={onTextChange} />
        <button name="submit" onClick={_onSubmit}>
          Add
        </button>
      </div>,
    ),
  ).toEqual(true);
});
