
import './App.css';


import NavBar from './componets/common/NavBar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './componets/RecipeDetails';
import SavedRecipePage from './pages/SavedRecipePage';
import About from './pages/About';
// import Contact from './pages/Contact';
import FamousRecipes from './pages/FamousRecipes';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/saved" element={<SavedRecipePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/famous-recipe" element={<FamousRecipes />} />
      </Routes>
    </Router>

  );
}

export default App;