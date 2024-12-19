
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
            <img src={recipe.image} alt={`Image of ${recipe.label}`} className="recipe-cart-image" />
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

