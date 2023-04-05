import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, feedback }) => {
  return (
    <div className={css.btns}>
      {options.map((option, index) => (
        <button
          key={index}
          className={css.btn}
          type="button"
          onClick={() => feedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
