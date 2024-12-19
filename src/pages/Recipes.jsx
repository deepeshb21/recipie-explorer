import { useEffect, useState } from "react";
import { getRecipes } from "../Services/api";
import { useSearchParams } from "react-router-dom";
import Search from "../componets/Search";
import RecipeList from "../componets/RecipeList";

const Recipes = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [recipes, setRecipes] = useState([]);
    const [likedRecipes, setLikedRecipes] = useState({});
    const [loading, setLoading] = useState(false);
    const [hasMoreRecipes, setHasMoreRecipes] = useState(true);

    const recipesPerPage = 20;

    // Read search query and page from URL, with defaults
    const searchedQuery = searchParams.get("query") || "ice cream"; // Default query is 'egg'
    const page = parseInt(searchParams.get("page"), 10) || 1;

    // Function to update query and page in URL (persistent)
    const updateSearchParams = (newQuery, newPage) => {
        setSearchParams({ query: newQuery, page: newPage });
    };

    // Effect for fetching recipes when the search query or page changes
    useEffect(() => {
        const getSearchedResult = async (query, page) => {
            setLoading(true); // Start loading
            const from = (page - 1) * recipesPerPage; // Calculate the starting point for the API request
            const to = from + recipesPerPage; // Calculate the ending point for the API request

            const result = await getRecipes(query, from, to);
            if (result && result.hits.length > 0) {
                const recipeList = result.hits.map((hit) => hit.recipe);
                setRecipes(recipeList);
                setHasMoreRecipes(result.hits.length === recipesPerPage); // If we received exactly recipesPerPage results, there are more
            } else {
                setRecipes([]);
                setHasMoreRecipes(false);
            }
            setLoading(false); // End loading
        };

        getSearchedResult(searchedQuery, page);
    }, [searchedQuery, page]); // Dependencies on query and page

    // Handle search updates
    const handleSearch = (query) => {
        updateSearchParams(query, 1); // Start from page 1 when a new search query is set
    };

    // Handle pagination
    const loadNextPage = () => {
        updateSearchParams(searchedQuery, page + 1);
    };

    const loadPreviousPage = () => {
        if (page > 1) {
            updateSearchParams(searchedQuery, page - 1);
        }
    };

    // Toggle like/unlike for a recipe
    const toggleLike = (recipeId) => {
        setLikedRecipes((prev) => ({
            ...prev,
            [recipeId]: !prev[recipeId],
        }));
    };

    return (
        <>
            <Search setSearchedQuery={handleSearch} />
            <RecipeList
                recipes={recipes}
                searchedQuery={searchedQuery}
                likedRecipes={likedRecipes}
                toggleLike={toggleLike}
            />

            {loading && <p>Loading...</p>} {/* Loading spinner or text */}

            <div className="pagination-buttons">
                <button
                    onClick={loadPreviousPage}
                    disabled={page === 1 || loading} // Disable if on the first page or loading
                >
                    Previous
                </button>

                <button
                    onClick={loadNextPage}
                    disabled={!hasMoreRecipes || loading} // Disable if no more recipes or loading
                >
                    Next
                </button>
            </div>

            {!hasMoreRecipes && !loading && <p>No more recipes to load.</p>}
        </>
    );
};

export default Recipes;



