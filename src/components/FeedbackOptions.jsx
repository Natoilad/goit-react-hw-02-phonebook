export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((name, i) => {
        return (
          <button
            key={i}
            type="button"
            onClick={() => {
              onLeaveFeedback(name);
            }}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};
