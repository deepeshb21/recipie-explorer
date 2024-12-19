import { Container, Grid, Header, } from "semantic-ui-react";
import RecipeListitem from "./RecipeListitem";


const RecipeList = ({ recipes, searchedQuery }) => {

    return (
        <Container className="">
            <Header
                size="huge"
                content={`Results for "${searchedQuery}"`}
                textAlign='center'
            />
            <Grid columns={4} doubling stackable>
                {
                    recipes && recipes.map(recipe => (
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                            <RecipeListitem recipe={recipe} />
                        </Grid.Column>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default RecipeList;








// -------------------------------------------------------------------------------------------------------------------------------------------
