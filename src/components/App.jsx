import style from './App.module.css';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  return (
    <div className={style.app}>
      <Section title="Leave Feedback">
        <FeedbackOptions options={''} />
      </Section>
      <Section title="Statistics">
        {
          <Statistics
            good={1}
            neutral={2}
            bad={3}
            total={0}
            positivePercentage={30}
          />
        }
      </Section>
    </div>
  );
};
