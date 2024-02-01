import { Component } from 'react';
import PropTypes from 'prop-types';
class Notification extends Component {
  render() {
    const { children } = this.props;
    return <p>{children}</p>;
  }
}

Notification.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Notification;
