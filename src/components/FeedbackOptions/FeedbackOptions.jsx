import style from './FeedbackOptions.module.css';
import '../Section/Section.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.options}>
      <ul className={style.list}></ul>
    </div>
  );
};

export default FeedbackOptions;
