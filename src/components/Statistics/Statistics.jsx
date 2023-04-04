import { Component } from 'react';

class Statistics extends Component {
  render() {
    const { stats, total, positivePercentage } = this.props;
    return (
      <div>
        <ul>
          {Object.entries(stats).map(([keys, values], i) => {
            return (
              <li key={i}>
                {keys}: {values}
              </li>
            );
          })}
          <li>Total: {total}</li>
          <li>Positive Feedback: {positivePercentage} %</li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
