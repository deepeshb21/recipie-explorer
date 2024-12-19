import axios from 'axios';

const APP_ID = '4f0805d6'; // Replace with your actual App ID
const APP_KEY = 'b9adf84606d3c3b02c3b74426e11b0c2'; // Replace with your actual App Key

export const getRecipes = async (query, from = 0, to = 20) => {
    try {
        const response = await axios.get(`https://api.edamam.com/search`, {
            params: {
                q: query,
                app_id: APP_ID,
                app_key: APP_KEY,
                from: from, // Pagination support
                to: to,
            },
        });
        return response.data; // Return full data including hits array with recipes
    } catch (error) {
        console.error("Error fetching recipes from Edamam:", error);
        return null;
    }
};
