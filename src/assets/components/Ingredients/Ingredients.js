import './Ingredients.scss';

const Ingredients = ({ recipe }) => {
  return (
    <div className="ingredients">
      <h3 className="ingredients__title">Ingredients</h3>
      <ul className="ingredients__list">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="ingredients__item">
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
