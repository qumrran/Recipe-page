import './Nutrition.scss';

const Nutrition = ({ recipe }) => {
  const { nutrition } = recipe;

  const nutritionKeys = Object.keys(nutrition).filter(
    (key) => key !== 'description'
  );

  return (
    <div className='nutrition'>
      <h3 className='nutrition__title'>Nutrition</h3>
      <p className='nutrition__description'>{nutrition.description}</p>
      <div className='nutrition__table'>
        <table>
          <tbody>
            {nutritionKeys.map((key, index) => (
              <tr key={index}>
                <td className='nutrition__label'>
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </td>
                <td className='nutrition__value'>{nutrition[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Nutrition;
