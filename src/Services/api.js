
// import axios from 'axios';
// import { API_URL } from '../constants/constant';

// export const getRecipes = async (searchedQuery ) => {

//     try{
//        let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`); 
//         return response.data;
//     }catch (error){
//         console.log('Error while caling the api ', error.message);
//         return error.response 
//     }
    
// } 

// export const getRecipe = async (searchedQuery ) => {

//     try{
//        let response = await axios.get(`${API_URL}/get?rId=${searchedQuery}`); 
//         return response.data;
//     }catch (error){
//         console.log('Error while caling the api ', error.message);
//         return error.response 
//     }
    
// }





// import axios from 'axios';

// // Store your Edamam API credentials
// const APP_ID = '4f0805d6'; // Replace with your actual App ID
// const APP_KEY = 'b9adf84606d3c3b02c3b74426e11b0c2'; // Replace with your actual App Key

// export const getRecipes = async (query) => {
//     try {
//         const response = await axios.get(`https://api.edamam.com/search`, {
//             params: {
//                 q: query,
//                 app_id: APP_ID,
//                 app_key: APP_KEY,
//             },
//         });
//         return response.data; // Return the full response
//     } catch (error) {
//         console.error("Error fetching recipes from Edamam:", error);
//         return null;
//     }
// };


// ---------------------------------------------------------------------------------------------------------------------------------------\\

import axios from 'axios';

const APP_ID = '4f0805d6'; // Replace with your actual App ID
const APP_KEY = 'b9adf84606d3c3b02c3b74426e11b0c2'; // Replace with your actual App Key

export const getRecipes = async (query, from = 0, to = 10) => {
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
