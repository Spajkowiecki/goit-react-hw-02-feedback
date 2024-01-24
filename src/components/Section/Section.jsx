import styles from './Section.module.css';

const { Component } = require('react');

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div>
        <h2 className={styles.h2}>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;
