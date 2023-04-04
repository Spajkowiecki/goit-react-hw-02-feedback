import Section from './Section/Section';
import { Component } from 'react';
import style from './App.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
//klasowo
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedbacks() {
    //uzywam reduce aby dodac wszystkie wartosci z feedback'u
    return this.countTotalFeedbacks === 0
      ? 0
      : Object.values(this.state).reduce((a, b) => a + b);
  }
  countPositiveFeedbackPercentage() {
    return this.countTotalFeedbacks === 0
      ? 0
      : Math.round((this.state.good / this.countTotalFeedbacks()) * 100);
  }

  onLeaveFeedback = e => {
    //w pętli sprawdzam który guzik został nacisnięty po przez
    switch (e.target.textContent) {
      case 'good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;
      case 'neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;
      case 'bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;
      default:
        return 0;
    }
  };

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
          {this.countTotalFeedbacks() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              stats={this.state}
              total={this.countTotalFeedbacks()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
