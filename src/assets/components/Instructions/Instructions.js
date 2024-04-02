import './Instructions.scss';

const Instructions = ({ recipe }) => {
  return (
    <div className="instructions">
      <h3 className="instructions__title">Instructions</h3>
      <ol className="instructions__list">
        {recipe.instructions.map((instruction, index) => (
          <li key={index} className="instructions__step">
            <strong className="instructions__action">{instruction.action}</strong>: {instruction.details}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;
