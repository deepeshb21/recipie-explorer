
// import { Container, Grid, Header } from "semantic-ui-react";
// import RecipeListitem from "./RecipeListitem";


// const RecipeList  = ({ recipes, searchedQuery })  => {
     
//     return(
//         <Container>
//             <Header
//                size="huge"
//             content={`RECIPE LIST FOR ${searchedQuery}`}
//             textAlign='center'
//             />
//             <Grid columns={4} doubling>
//                 {
//                     recipes && recipes.map(recipe =>(
//                         <Grid.Column>
//                             <RecipeListitem recipe={recipe}/>
//                         </Grid.Column>
//                     ))
//                 }
//             </Grid>
//         </Container>
//     )
// }

// export default RecipeList;






// import { Grid } from "semantic-ui-react";

// const RecipeList = ({ recipes, searchedQuery }) => {
//     return (
//         <div>
//             <h2>Results for "{searchedQuery}"</h2>
//             <Grid columns={3} divided>
//                 {recipes.map((recipe) => (
//                     <Grid.Column key={recipe.uri}>
//                         <div style={{ padding: '1em' }}>
//                             <h3>{recipe.label}</h3>
//                             <img src={recipe.image} alt={recipe.label} style={{ width: '100%' }} />
//                             <p>Calories: {Math.round(recipe.calories)}</p>
//                             <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
//                         </div>
//                     </Grid.Column>
//                 ))}
//             </Grid>
//         </div>
//     );
// };

// export default RecipeList;






//working code
import { Container, Grid, Header,} from "semantic-ui-react";
import RecipeListitem from "./RecipeListitem";


const RecipeList  = ({ recipes, searchedQuery })  => {
     
    return(
        <Container className="">
            <Header
               size="huge"
            content={`Results for "${searchedQuery}"`}
            textAlign='center'
            />
            <Grid columns={4} doubling stackable>
                {
                    recipes && recipes.map(recipe =>(
                        <Grid.Column  mobile={16} tablet={8} computer={4}>
                            <RecipeListitem recipe={recipe}/>
                        </Grid.Column>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default RecipeList;








// -------------------------------------------------------------------------------------------------------------------------------------------
