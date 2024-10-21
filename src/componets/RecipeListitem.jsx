
// import { Button, Card } from "semantic-ui-react";
// import { Link } from "react-router-dom";

// const RecipeListitem = ({ recipe }) => {

//     return (
//         <Card>
//             <img src={recipe.image_url} alt="thumbnail" style={{ height: 170 }} />
//             <Card.Content>
//                 <Card.Header content={recipe.title} />
//                 <Card.Description>
//                     <h4>{recipe.publisher}</h4>
//                 </Card.Description>
//             </Card.Content>

//             <Card.Content>
//                 <Button
//                     as={Link}
//                     to={`/recipes/${recipe.recipe_id}`}
//                     content="Details"
//                     color="blue"
//                     size="tiny"
//                 />
//                 <Button
//                     href={recipe.source_url}
//                     target="_blank"
//                     content="Recipe_URL"
//                     color="green"
//                     size="tiny"
//                 />



//             </Card.Content>
//         </Card>
//     )
// }

// export default RecipeListitem;





// import React, { useState, useEffect } from 'react';
// import { Button, Card, TextArea, Icon } from "semantic-ui-react";
// import { Link } from "react-router-dom";

// const RecipeListitem = ({ recipe }) => {
//     // State to manage whether the recipe is saved
//     const [isSaved, setIsSaved] = useState(false);

//     // Effect to check if the recipe is already saved in local storage
//     useEffect(() => {
//         const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
//         if (savedRecipes.some(savedRecipe => savedRecipe.recipe_id === recipe.recipe_id)) {
//             setIsSaved(true);
//         }
//     }, [recipe.recipe_id]);

//     // Function to toggle save/unsave functionality
//     const handleSave = () => {
//         const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

//         if (isSaved) {
//             // Remove from saved recipes
//             const updatedRecipes = savedRecipes.filter(savedRecipe => savedRecipe.recipe_id !== recipe.recipe_id);
//             localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
//         } else {
//             // Add to saved recipes
//             savedRecipes.push(recipe);
//             localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
//         }
//         setIsSaved(!isSaved); // Toggle the saved state
//     };

//     return (
//         <Card>
//             <img src={recipe.image_url} alt={`Image of ${recipe.title}`} style={{ height: 170 }} />
//             <Card.Content>
//                 <Card.Header content={recipe.title} />
//                 <Card.Description>
//                     <h4>{recipe.publisher}</h4>
//                 </Card.Description>
//             </Card.Content>

//             <Card.Content extra>
//                 <Button
//                     as={Link}
//                     to={`/recipes/${recipe.recipe_id}`}
//                     content="Details"
//                     color="blue"
//                     size="tiny"
//                 />
//                 <Button
//                     href={recipe.source_url}
//                     target="_blank"
//                     content="Recipe URL"
//                     color="green"
//                     size="tiny"
//                 />
//                 <Icon
//                     name={isSaved ? "heart" : "heart outline"} // Use heart icon for saved and outline for unsaved
//                     color={isSaved ? "red" : "grey"} // Change color based on saved status
//                     size="large"
//                     onClick={handleSave} // Call handleSave on click
//                     style={{ marginLeft: '0.5em', cursor: 'pointer' }} // Add margin and cursor style for better UX
//                 />
//                 {/* <Button
//                     onClick={handleSave}
//                     content={isSaved ? "Unsave" : "Save"}
//                     color={isSaved ? "red" : "yellow"}
//                     size="tiny"
//                     style={{ marginLeft: '-1em' }} // Added margin for spacing
//                 /> */}
//             </Card.Content>
//         </Card>
//     );
// }

// export default RecipeListitem;





//working code
// import React, { useState, useEffect } from 'react';
// import { Button, Card, Icon } from "semantic-ui-react";
// import { Link } from "react-router-dom";

// const RecipeListitem = ({ recipe }) => {
//     const [isSaved, setIsSaved] = useState(false);

//     // Check if recipe is already saved when component mounts
//     useEffect(() => {
//         const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
//         if (savedRecipes.some(savedRecipe => savedRecipe.recipe_id === recipe.recipe_id)) {
//             setIsSaved(true);
//         }
//     }, [recipe.recipe_id]);

//     // Handle save/unsave functionality
//     const handleSave = () => {
//         const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

//         if (isSaved) {
//             // Remove from saved recipes
//             const updatedRecipes = savedRecipes.filter(savedRecipe => savedRecipe.recipe_id !== recipe.recipe_id);
//             localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
//         } else {
//             // Add to saved recipes
//             savedRecipes.push(recipe);
//             localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
//         }

//         setIsSaved(!isSaved); // Toggle like state
//     };

//     return (
//         <Card className="recipe-card">
//             <img src={recipe.image_url} alt={`Image of ${recipe.title}`} style={{ height: "170px", objectFit: "cover" }} />
//             <Card.Content className="card-content">
//                 <Card.Header className='content title'>{recipe.title}</Card.Header>
//                 <Card.Description className='content'>
//                     <h4>{recipe.publisher}</h4>
//                 </Card.Description>
//             </Card.Content>
//             <Card.Content extra>
//                 <Button as={Link} to={`/recipes/${recipe.recipe_id}`} content="Details" color="blue" size="tiny" />
//                 <Button href={recipe.source_url} target="_blank" content="Recipe URL" color="green" size="tiny" />
//                 <Icon
//                     name={isSaved ? "heart" : "heart outline"}
//                     color={isSaved ? "red" : "grey"}
//                     size="large"
//                     onClick={handleSave}
//                     style={{ marginLeft: '0.5em', cursor: 'pointer' }}
//                 />
//             </Card.Content>
//         </Card>
//     );
// };

// export default RecipeListitem;


// ---------------------------------------------------------------------------------------------------------------------------------







// import React, { useState, useEffect } from 'react';
// import { Button, Card, Icon } from "semantic-ui-react";
// import { Link } from "react-router-dom";

// const RecipeListitem = ({ recipe }) => {
//     const [isSaved, setIsSaved] = useState(false);

//     // Check if recipe is already saved when component mounts
//     useEffect(() => {
//         const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
//         if (savedRecipes.some(savedRecipe => savedRecipe.id === recipe.id)) {
//             setIsSaved(true);
//         }
//     }, [recipe.id]);

//     // Handle save/unsave functionality
//     const handleSave = () => {
//         const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

//         if (isSaved) {
//             // Remove from saved recipes
//             const updatedRecipes = savedRecipes.filter(savedRecipe => savedRecipe.id !== recipe.id);
//             localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
//         } else {
//             // Add to saved recipes
//             savedRecipes.push(recipe);
//             localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
//         }

//         setIsSaved(!isSaved); // Toggle like state
//     };

//     return (
//         <Card className="recipe-card">
//             <img src={recipe.image} alt={`Image of ${recipe.image}`} style={{ height: "170px", objectFit: "cover" }} />
//             <Card.Content className="card-content">
//                 <Card.Header className='content title'>{recipe.label}</Card.Header>
//                 <p>Calories: {Math.round(recipe.calories)}</p>
//                 <Card.Description className='content'>
//                     <h4>{recipe.source}</h4>
//                 </Card.Description>
//             </Card.Content>
//             <Card.Content extra>
//                 <Button as={Link} to={`/recipes/${recipe.ingredients}`} content="Details" color="blue" size="tiny" />
//                 {/* <Button href={recipe.ingredients} target="_blank" content="Details" color="blue" size="tiny" /> */}
//                 <Button href={recipe.url} target="_blank" content="Recipe URL" color="green" size="tiny" />
//                 <Icon
//                     name={isSaved ? "heart" : "heart outline"}
//                     color={isSaved ? "red" : "grey"}
//                     size="large"
//                     onClick={handleSave}
//                     style={{ marginLeft: '0.5em', cursor: 'pointer' }}
//                 />
//             </Card.Content>
//         </Card>
//     );
// };

// export default RecipeListitem;




//working code
import React, { useState, useEffect } from 'react';
import { Button, Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RecipeListItem = ({ recipe }) => {
    const [isSaved, setIsSaved] = useState(false);

    // Function to get saved recipes from localStorage
    const getSavedRecipes = () => JSON.parse(localStorage.getItem('savedRecipes')) || [];

    // Check if the recipe is already saved when component mounts
    useEffect(() => {
        const savedRecipes = getSavedRecipes();
        if (savedRecipes.some(savedRecipe => savedRecipe.uri === recipe.uri)) { // Assuming `uri` is unique for each recipe
            setIsSaved(true);
        }
    }, [recipe.uri]);

    // Handle save/unsave functionality
    const handleSave = () => {
        const savedRecipes = getSavedRecipes();

        if (isSaved) {
            // Remove from saved recipes
            const updatedRecipes = savedRecipes.filter(savedRecipe => savedRecipe.uri !== recipe.uri);
            localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
        } else {
            // Add to saved recipes
            savedRecipes.push(recipe);
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        }

        setIsSaved(!isSaved);
    };

    return (
        <Card className="recipe-card">
            <img src={recipe.image} alt={`Image of ${recipe.label}`} style={{ height: "170px", objectFit: "cover" }} />
            <Card.Content className="card-content">
                <Card.Header className='content title'>{recipe.label}</Card.Header>
                <p>Calories: {Math.round(recipe.calories)}</p>
                <Card.Description className='content'>
                    <h4>{recipe.source}</h4>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {/* Link to the details page, using encoded URI */}
                <Button as={Link} to={`/recipes/${encodeURIComponent(recipe.uri)}`} content="Details" color="blue" size="tiny" />
                <Button href={recipe.url} target="_blank" content="Recipe URL" color="green" size="tiny" />
                <Icon
                    name={isSaved ? "heart" : "heart outline"}
                    color={isSaved ? "red" : "grey"}
                    size="large"
                    onClick={handleSave}
                    style={{ marginLeft: '0.5em', cursor: 'pointer' }}
                />
            </Card.Content>
        </Card>
    );
};

export default RecipeListItem;

