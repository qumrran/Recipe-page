import './Instructions.scss';

const Instructions = ({ recipe }) => {
  return (
    <div className="instructions">
      <h3 className="instructions__title">Instructions</h3>
      <ol className="instructions__list">
        {recipe.instructions.map((instruction, index) => (
          <li key={index} className="instructions__step">
            {instruction}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;
