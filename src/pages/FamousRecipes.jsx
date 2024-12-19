//* only view recipes show *\\
import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import axios from "axios";

const FamousRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://api.spoonacular.com/recipes/random";
  const API_KEY = "f08f88ea7ce84d068af11bd09f983a69"; // Your API key

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            number: 12, // Number of recipes to fetch
            apiKey: API_KEY,
          },
        });
        setRecipes(response.data.recipes || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="famous-recipes-container" style={{ padding: "2rem" }}>
      <div className="welcome-message">
        <h2>Welcome to Our Recipe Website!</h2>
        <p>Discover and enjoy the most famous recipes from around the world.</p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : recipes.length ? (
        <Card.Group className="famous-recipe-box" itemsPerRow={3} stackable>
          {recipes.map((recipe) => (
            <Card key={recipe.id}>
              <Image src={recipe.image} alt={recipe.title} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{recipe.title}</Card.Header>
                <Card.Meta>
                  <span>{recipe.readyInMinutes} mins</span>
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Button
                  as="a"
                  href={recipe.spoonacularSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="blue"
                  content="View Recipe"
                />
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default FamousRecipes;



