import React, { useState, useEffect } from 'react';
import { Grid, Message } from 'semantic-ui-react';
import RecipeListitem from '../componets/RecipeListitem';

const SavedRecipePage = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);

    // Load saved recipes from localStorage
    useEffect(() => {
        const recipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
        setSavedRecipes(recipes);
    }, []);

    // Handle when a recipe is unliked and removed from the list
    const handleToggleSave = () => {
        const recipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
        setSavedRecipes(recipes); // Update state when a recipe is unsaved
    };

//     return (
//         <div>
//             <h1 className='like-recipes'>Liked Recipes  </h1>

//             {savedRecipes.length === 0 ? (
//                 <Message warning>
//                     <Message.Header>No Liked Recipes</Message.Header>
//                     <p>You haven't liked any recipes yet. Go explore and like some recipes!</p>
//                 </Message>
//             ) : (
//                 <Grid  columns={5} divided >
//                     {savedRecipes.map((recipe) => (
//                         <Grid.Column key={recipe.recipe_id} style={{ marginBottom: '6em', marginLeft: '5em', marginRight : '-1em', marginTop: '5em',padding:'0', }}>
//                             <RecipeListitem
//                                 recipe={recipe}
//                                 onSave={handleToggleSave} // Pass onSave to handle unliking
//                             />
//                         </Grid.Column>
//                     ))}
//                 </Grid>
//             )}
//         </div>
//     );
// };


return (
    <div>
      <h1 className="like-recipes">Liked Recipes</h1>
  
      {savedRecipes.length === 0 ? (
        <Message warning>
          <Message.Header>No Liked Recipes</Message.Header>
          <p>You haven't liked any recipes yet. Go explore and like some recipes!</p>
        </Message>
      ) : (
        <Grid stackable>
          {savedRecipes.map((recipe) => (
            <Grid.Column key={recipe.recipe_id} computer={3} tablet={8} mobile={16}  style={{ marginTop: '5em', marginBottom: '6em', marginLeft: '6em', marginRight : '-1em', padding: 0}}>
              <RecipeListitem
                recipe={recipe}
                onSave={handleToggleSave} // Pass onSave to handle unliking
              />
            </Grid.Column>
          ))}
        </Grid>
      )}
    </div>
  );
}  

export default SavedRecipePage;





// -------------------------------------------------------------------------------------------------------------------------------