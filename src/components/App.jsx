import Section from './Section/Section';
import { Component } from 'react';
import style from './App.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
//klasowo
export class App extends Component {
  //

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    if (e.target.textContent === 'good') {
      this.setState({ good: this.state.good + 1 });
    }
    if (e.target.textContent === 'neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    }
    if (e.target.textContent === 'bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  countTotalFeedback(options) {
    const sum = Object.values(options).reduce((prev, el) => prev + el, 0);
    return sum;
  }

  render() {
    return (
      <div className={style.app}>
        <Section title="Leave Feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback(this.state) === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
