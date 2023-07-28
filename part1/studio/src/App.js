import logo from './logo.svg';
import './App.css';
import RecipeDescription from './Description';
import RecipeIngredients from './Ingredients';
import RecipePhoto from './Photos';

function App() {
  return (
    <div className="App">
        <div class="recipePhotoBlock"><RecipePhoto />
        <div>
          <RecipeDescription />
          <RecipeIngredients />
        </div>
      </div>
    </div>
  );
}

export default App;
