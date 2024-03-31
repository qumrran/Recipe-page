import './App.scss';
import Header from './assets/components/Header/Header';
import Ingredients from './assets/components/Ingredients/Ingredients';
import Instructions from './assets/components/Instructions/Instructions';
import Nutrition from './assets/components/Nutrition/Nutrition';
import Recipe from './assets/components/Recipe';

function App() {
  return (
    <div className="App">
      <Header recipe={Recipe} /> 
      <Ingredients recipe={Recipe} />
      <Instructions recipe={Recipe} />
      <Nutrition recipe={Recipe} />
    </div>
  );
}

export default App;
