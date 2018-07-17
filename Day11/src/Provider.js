// @flow
import {Component, PropTypes, Children} from 'react';

type Props = {
  dataStore: Object,
  children?: Object,
};

class Provider extends Component<Props> {
  static childContextType = {
    dataStore: PropTypes.object,
  };

  getChildContext() {
    {
      dataStore: this.props.dataStore;
    }
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default Provider;
