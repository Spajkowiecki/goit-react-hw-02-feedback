import styles from './FeedbackOptions.module.css';

const { Component } = require('react');

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={styles.list}>
        {Object.keys(options).map(option => {
          return (
            <li key={option}>
              <button onClick={onLeaveFeedback}>{option.toUpperCase()}</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default FeedbackOptions;
