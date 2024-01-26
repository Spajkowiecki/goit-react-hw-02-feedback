import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import styles from './App.module.css';

class App extends Component {
  initialValue = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    ...this.initialValue,
  };

  sumTotal() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  positivePercentage() {
    return (this.state.good / this.sumTotal()) * 100;
  }

  handleFeedback = button => {
    const { textContent } = button.target;
    const name = textContent.toLowerCase();
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.sumTotal() === 0 ? (
            <Notification>No feedback given</Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.sumTotal()}
              positivePercentage={Math.round(this.positivePercentage()) + '%'}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
