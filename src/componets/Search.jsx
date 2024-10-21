import { useState } from "react";
import { Grid, Form, Input, Icon } from "semantic-ui-react";
import { getRecipes } from "../Services/api";


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
                    <Input 
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





// import { useState, useEffect } from "react";

// const Search = ({ setSearchedQuery }) => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchHistory, setSearchHistory] = useState([]);

//     useEffect(() => {
//         // Fetch search history from localStorage on mount
//         const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
//         setSearchHistory(history);
//     }, []);

//     const handleSearch = () => {
//         setSearchedQuery(searchTerm);

//         // Save the new search term to history
//         const updatedHistory = [...new Set([searchTerm, ...searchHistory])]; // Prevent duplicates
//         setSearchHistory(updatedHistory);
//         localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
//     };

//     const handleHistoryClick = (term) => {
//         setSearchTerm(term);
//         setSearchedQuery(term);
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Search for recipes..."
//             />
//             <button onClick={handleSearch}>Search</button>

//             {searchHistory.length > 0 && (
//                 <div className="search-history">
//                     <p>Search History:</p>
//                     <ul>
//                         {searchHistory.map((term, index) => (
//                             <li key={index} onClick={() => handleHistoryClick(term)}>
//                                 {term}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Search;




// ------------------------------------------------------------------------------------------------------------\\


// import { useState, useEffect } from "react";
// import './Search.css'; // Import your CSS file

// const Search = ({ setSearchedQuery }) => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchHistory, setSearchHistory] = useState([]);

//     useEffect(() => {
//         // Fetch search history from localStorage on mount
//         const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
//         setSearchHistory(history);
//     }, []);

//     const handleSearch = () => {
//         setSearchedQuery(searchTerm);

//         // Save the new search term to history
//         const updatedHistory = [...new Set([searchTerm, ...searchHistory])]; // Prevent duplicates
//         setSearchHistory(updatedHistory);
//         localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
//     };

//     const handleHistoryClick = (term) => {
//         setSearchTerm(term);
//         setSearchedQuery(term);
//     };

//     return (
//         <div className="search-container">
//             <div className="search-box">
//                 <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     placeholder="Search for recipes..."
//                 />
//                 <button onClick={handleSearch}>Search</button>
//             </div>

//             {searchHistory.length > 0 && (
//                 <div className="search-history">
//                     <p>Search History:</p>
//                     <ul>
//                         {searchHistory.map((term, index) => (
//                             <li key={index} onClick={() => handleHistoryClick(term)}>
//                                 {term}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Search;

