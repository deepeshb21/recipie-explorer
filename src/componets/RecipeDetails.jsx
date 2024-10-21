// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { getRecipes } from "../Services/api";
// import { Button, Grid, Image, Header, SegmentGroup, Segment } from "semantic-ui-react";
// import { Link } from "react-router-dom";


// const RecipeDetails = () => {
//     const [recipe, setRecipe] = useState({});

//     const { recipeId } = useParams();

//     useEffect(() => {
//         const getData = async () => {
//             let result = await getRecipes(recipeId)
//             if (result && result.recipe) {
//                 setRecipe(result.recipe);
//             }
//         }
//         getData();
//     }, [])

//     return (
//         Object.keys(recipe).length > 0 ?
//             <Grid container stackable columns={2} className="detailsPageContent">
//                 <Grid.Column>
//                     <Button
//                         as={Link}
//                         to={'/recipes'}
//                         content="Back to Recipe List"
//                         color="yellow"
//                         style={{ marginBottom: 40 }}
//                     />
//                     <Image src={recipe.image_url} />
//                 </Grid.Column>
//                 <Grid.Column>
//                     <Header size="medium">{recipe.title}</Header>
//                     <p>Provided By: {recipe.publisher}</p>
//                     <Button
//                         as={"a"}
//                         href={recipe.source_url}
//                         target="blank"
//                         content="Publisher Webpage"
//                         color="blue"
//                     />
//                     <Button
//                         as={"a"}
//                         href={recipe.source_url}
//                         target="blank"
//                         content="Recipe URL"
//                         color="green"
//                     />
//                     <Header size="large" content="Ingredients" />
//                     <SegmentGroup>
//                         {
//                             recipe && recipe.ingredients.map(data => (
//                                 <Segment>
//                                     <h5>{data}</h5>
//                                 </Segment>
//                             ))
//                         }
//                     </SegmentGroup>
//                 </Grid.Column>
//             </Grid> : null
//     )
// }

// export default RecipeDetails;






// -------------------------------------------------------------------------------------------------------------------------------------


import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GridColumn, Button, Grid } from 'semantic-ui-react';
//import './RecipeDetails.css';  // Link the CSS file
import { Link } from 'react-router-dom';

const APP_ID = '4f0805d6';
const APP_KEY = 'b9adf84606d3c3b02c3b74426e11b0c2';

const RecipeDetails = () => {
    const { id } = useParams(); // Get the encoded recipe URI from the URL
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
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
                    setRecipe(response.data[0]); // API returns an array with one result
                }
            } catch (error) {
                console.error("Error fetching recipe details:", error);
            }
        };

        fetchRecipeDetails();
    }, [id]);

    if (!recipe) {
        return <p>Loading recipe details...</p>;
    }

    return (

        
        <GridColumn >
            <Button
                as={Link}
                to={'/recipes'}
                content="Back to Recipe List"
                color="yellow"
                style={{ marginTop: '7%', marginLeft: '4%' }} />
                
            <div className="recipe-details">
                <div className="recipe-image">
                    <img src={recipe.image} alt={recipe.label} />
                </div>
                <div className="recipe-info">
                    <h1>{recipe.label}</h1>
                    <p>Calories: {Math.round(recipe.calories)}</p>
                    <div className="recipe-content">
                        <div className="ingredients">
                            <h2>Ingredients</h2>
                            <ul>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient.text}</li>
                                ))}
                            </ul>
                        </div>

                        <GridColumn>
                            {/* New Nutrients Section */}
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

                    </div>
                </div>
            </div>
        </GridColumn>

    );
};


export default RecipeDetails;
