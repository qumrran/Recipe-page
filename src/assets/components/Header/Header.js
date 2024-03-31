import './Header.scss';

const Header = ({ recipe }) => {
  return (
    <header className="header">
      <img className="header__heroimage" src={recipe.heroImage} alt="Hero Image" />
      <h1 className="header__title">{recipe.title}</h1>
      <p className="header__description">{recipe.description}</p>
      
      <div className="header__preparation-time">
        <h2 className="header__preparation-time-title">Preparation Time</h2>
        <ul className="header__preparation-time-list">
          {Object.entries(recipe.preparationTime).map(([key, value]) => (
            <li key={key} className="header__preparation-time-item">
              <strong className="header__time-key">{key}:</strong>
              <span className="header__time-value">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
