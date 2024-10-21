import React, { useContext } from 'react';
import { SavedRecipesContext } from '../../contexts/SavedRecipesContext.jsx';  // Import the context

const RecipeCard = ({ recipe }) => {
  const { savedRecipes, addRecipe, removeRecipe } = useContext(SavedRecipesContext);

  const isSaved = savedRecipes.some(saved => saved.id === recipe.id);

  const handleSaveClick = () => {
    if (isSaved) {
      removeRecipe(recipe.id);
    } else {
      addRecipe(recipe);
    }
  };

  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <button onClick={handleSaveClick}>
        {isSaved ? 'Remove from Saved' : 'Save Recipe'}
      </button>
    </div>
  );
};

export default RecipeCard;
