import './Nutrition.scss';
const Nutrition = ({ recipe }) => {
    const { nutrition } = recipe;
  
    return (
        <div className="nutrition">
          <h3 className="nutrition__title">Nutrition</h3>
          <div className="nutrition__list">
            {Object.entries(nutrition).map(([key, value]) => (
              <div key={key} className="nutrition__item">
                <span className="nutrition__label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> <strong className="nutrition__value">{value}</strong>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Nutrition;