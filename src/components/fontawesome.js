import React, { Component } from 'react';

class FontAwesome extends Component {
  static propTypes = {
    icon: React.PropTypes.string
  }

  static defaultProps = {
    icon: ''
  }

  render() {
    if (this.props.icon) {
      return <i className={"fa fa-" + this.props.icon} aria-hidden="true" />;
    } else {
      return null;
    }
  }
}

export default FontAwesome;
