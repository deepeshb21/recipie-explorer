
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




// import { Button, Icon, Card } from "semantic-ui-react";
// import { motion } from "framer-motion";
// import Header from "../componets/Header"
// import { Link } from "react-router-dom";


// const Home = () => {
//   const featuredRecipes = [
//     { id: 1, title: "Spaghetti Carbonara", description: "Classic Italian pasta.", image: "carbonara.jpg" },
//     { id: 2, title: "Green Smoothie", description: "Healthy and refreshing.", image: "smoothie.jpg" },
//     { id: 3, title: "Avocado Toast", description: "Perfect for breakfast.", image: "avocado.jpg" },
//   ];

//   return (
//     <div>
//       <Header title="Our Recipe" bgclass="bg-image">
//         <Button
//           content="SEARCH HERE"
//           color="primary"
//           as={Link}
//           to="/recipes"
//           size="big"
//         />
//       </Header>

//       {/* Featured Recipes Section */}
//       <section className="featured-section">
//         <h2>Featured Recipes</h2>
//         <Card.Group itemsPerRow={3}>
//           {featuredRecipes.map((recipe) => (
//             <Card key={recipe.id} image={recipe.image} header={recipe.title} description={recipe.description} />
//           ))}
//         </Card.Group>
//       </section>

//       {/* Live Chat Feature */}
//       <section className="chat-section">
//         <h2>Chat with Our AI Assistant</h2>
//         <p>Have questions? Start a conversation with our AI recipe assistant!</p>
//         <Button color="teal" size="large">
//           <Icon name="chat" />
//           Chat Now
//         </Button>
//       </section>

//       {/* Trending Recipes with Animations */}
//       <section className="trending-section">
//         <h2>Trending Recipes</h2>
//         <motion.div className="trending-recipes">
//           <Card
//             image="trend1.jpg"
//             header="Vegan Tacos"
//             description="Spicy and full of flavor."
//           />
//           <Card
//             image="trend2.jpg"
//             header="Choco Lava Cake"
//             description="Indulge in chocolate heaven."
//           />
//           <Card
//             image="trend3.jpg"
//             header="Summer Salad"
//             description="Light and refreshing."
//           />
//         </motion.div>
//       </section>

//       {/* Footer */}
    //   <footer className="footer">
    //     <p>&copy; 2024 Recipe Explorer. All rights reserved.</p>
    //     <div className="social-icons">
    //       <Icon name="facebook" />
    //       <Icon name="instagram" />
    //       <Icon name="twitter" />
    //     </div>
    //   </footer>
    // </div>
//   );
// };

// export default Home;
