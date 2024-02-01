import { Component } from 'react';

import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
