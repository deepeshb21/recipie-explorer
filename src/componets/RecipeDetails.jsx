import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GridColumn, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import framer-motion for animations


const APP_ID = '4f0805d6';
const APP_KEY = 'b9adf84606d3c3b02c3b74426e11b0c2';

// Array of motivational quotes
const quotes = [
    "Cooking is like love. It should be entered into with abandon or not at all.",
    "The secret ingredient is always love.",
    "Good food is the foundation of genuine happiness.",
    "Cooking is an art, but all art requires knowing something about the techniques and materials."
];

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [quote, setQuote] = useState("");

    useEffect(() => {
        // Fetch recipe details
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(`https://api.edamam.com/search`, {
                    params: {
                        r: decodeURIComponent(id),
                        app_id: APP_ID,
                        app_key: APP_KEY,
                    },
                });
                if (response.data.length > 0) {
                    setRecipe(response.data[0]); // Set the recipe data
                }
            } catch (error) {
                console.error("Error fetching recipe details:", error);
            }
        };

        fetchRecipeDetails();

        // Set a random quote from the array
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, [id]);

    if (!recipe) {
        return <p>Loading recipe details...</p>;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <GridColumn className='backbtn-size'>
                <Button className='back-btn-box'
                    as={Link}
                    to={'/recipes'}
                    content="Back to Recipe List"
                    color="yellow"
                    style={{ marginTop: '7%', marginLeft: '4%' }}
                />

                <div className="recipe-details">
                    {/* Animate the recipe image */}
                    <motion.div
                        className="recipe-image"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={recipe.image} alt={recipe.label} />
                    </motion.div>

                    <div className="recipe-info">
                        <motion.h1
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ color: '#4A90E2', textAlign: 'center' }} // Change the color of the title
                        >
                            {recipe.label}
                        </motion.h1>

                        <p style={{ color: '#7B68EE' }}>Calories: {Math.round(recipe.calories)}</p>

                        <motion.div
                            className="recipe-content"
                            initial={{ x: -20 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="ingredients">
                                <h2>Ingredients</h2>
                                <ul>
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient.text}</li>
                                    ))}
                                </ul>
                            </div>

                            <GridColumn>
                                <div className="nutrients">
                                    <h2>Total Nutrients</h2>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Nutrient</th>
                                                <th>Quantity</th>
                                                <th>Unit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.entries(recipe.totalNutrients).map(([key, nutrient]) => (
                                                <tr key={key}>
                                                    <td>{nutrient.label}</td>
                                                    <td>{Math.round(nutrient.quantity)}</td>
                                                    <td>{nutrient.unit}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </GridColumn>
                        </motion.div>

                        {/* Display a random cooking quote */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="quote-section"
                            style={{ marginTop: '20px', fontStyle: 'italic', color: '#E27D60' }}
                        >
                            "{quote}"
                        </motion.div>
                    </div>
                </div>
            </GridColumn>
        </motion.div>
    );
};

export default RecipeDetails;
