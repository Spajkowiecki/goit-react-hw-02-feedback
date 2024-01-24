import styles from './Statistics.module.css';

const { Component } = require('react');

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      //   <ul className={styles}>
      //     {propsArray.map(stat => {
      //       return (
      //         <li key={stat}>
      //           <p className={styles.stat}>
      //             {stat}: <strong>{this.props[stat]}</strong>
      //           </p>
      //         </li>
      //       );
      //     })}
      //   </ul>
      <ul className={styles.stat}>
        <li>
          <p>
            Good: <strong>{good}</strong>
          </p>
        </li>
        <li>
          <p>
            Neutral: <strong>{neutral}</strong>
          </p>
        </li>
        <li>
          <p>
            Bad: <strong>{bad}</strong>
          </p>
        </li>
        <li>
          <p>
            Total: <strong>{total}</strong>
          </p>
        </li>
        <li>
          <p>
            Positive feedback: <strong>{positivePercentage}</strong>
          </p>
        </li>
      </ul>
    );
  }
}

export default Statistics;
