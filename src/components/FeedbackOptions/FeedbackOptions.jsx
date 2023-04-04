import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.options}>
      <ul className={style.list}>
        {
          //użycie pętli po obiekcie by otrzymać nazwy pól w obiekcie
          Object.keys(options).map((option, i) => {
            //generowanie guzików z listy opcji
            return (
              //nadanie kazdemu kolejnemu guzikowi key= {b + i}| b1, b2, b3 etc.
              <li key={'b' + i}>
                <button className={style.button} onClick={onLeaveFeedback}>
                  {option}
                </button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default FeedbackOptions;
