import { useState } from "react";
import { Grid, Form, Input, Icon } from "semantic-ui-react";



const Search = ({ setSearchedQuery }) => {
    const [value, setvalue] = useState("");

    const onFromSubmit = () => {
        setSearchedQuery(value);
    }

    return (
        <Grid column={2} textAlign="center" className='search-box'>
            <Grid.Column>
                <h2 className="search-heading">
                    Search Recipes
                </h2>
                <Form onSubmit={onFromSubmit}>
                    <Input className="recipe-search-box"
                        placeholder="Search for recipes..."
                        action={{ icon: 'search', color: 'blue' }}
                        onChange={(e) => setvalue(e.target.value)}
                        value={value}
                        style={{ width: '40%', fontSize: '16px' }}
                    />
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Search;





// -------------------------------------------------------------------------------------------------------------------------------------