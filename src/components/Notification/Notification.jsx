const { Component } = require('react');

class Notification extends Component {
  render() {
    const { children } = this.props;
    return <p>{children}</p>;
  }
}

export default Notification;
