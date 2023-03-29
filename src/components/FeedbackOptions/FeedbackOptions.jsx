import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.options}>
      <ul className={style.list}>
        {Object.keys(options).map((option, i) => {
          return (
            <li key={'b' + i}>
              <button className={style.button} onClick={onLeaveFeedback}>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeedbackOptions;
