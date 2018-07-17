// @flow
import React, {Component} from 'react';
import PropTypes from 'prop-types';

type GroupProps = {
  name: string,
  children?: Array<React$Element<*>>,
};

export class RadioGroup extends Component <GroupProps> {

  static childContextTypes = {
    name: PropTypes.string,
  };

  getChildContext() {
    return {name: this.props.name};
  }

  render() {
    console.log(this.props);
    let {name, children, ...otherProps} = this.props;
    return <div {...otherProps}>{children}</div>;
  }
}

type ItemProps = {
  children?: Array<React$Element<*>>,
};

export class RadioItem extends Component<ItemProps>{
  static contextTypes = {
    name: PropTypes.string,
  };

  render() {
    let {children, ...otherProps} = this.props;
    return (
      <div {...otherProps}>
        <input type="radio" name={this.context.name} />
        <span>{children}</span>
      </div>
    );
  }
}
