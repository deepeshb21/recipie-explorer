
import {Button} from "semantic-ui-react";
import Header from "../componets/Header";
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <Header title="Our Recipe" bgclass="bg-image">
            <Button
               content="SEARCH HERE"
               color="primary"
               as={Link}
               to="/recipes"
               size="big"
            />

        </Header>
        
   )

}

export default Home;
