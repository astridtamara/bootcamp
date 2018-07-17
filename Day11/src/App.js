// @flow
import React, {Component} from 'react';
import {RadioGroup, RadioItem} from './core-ui/RadioGroup';

type State = {};

class App extends Component<State> {
  render() {
    return (
      <div>
        <RadioGroup name="favColor">
          <RadioItem>Red</RadioItem>
          <RadioItem>Blue</RadioItem>
          <RadioItem>Yellow</RadioItem>
        </RadioGroup>
        <RadioGroup name="favSport">
          <RadioItem>Soccer</RadioItem>
          <RadioItem>Badminton</RadioItem>
          <RadioItem>Tennis</RadioItem>
        </RadioGroup>
      </div>
    );
  }
}

export default App;
