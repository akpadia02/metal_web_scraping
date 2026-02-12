/* ============================================================================
   FILE: App.jsx
   RESPONSIBILITY:
     Main React component for the commodities dashboard application.
     Manages state for commodity data, search filtering, and loading status.
     Fetches live commodity data from backend API on component mount.
     Renders responsive UI with search functionality and commodity price cards.
     Displays real-time market prices for metals and commodities.
   ============================================================================ */

// Import React hooks for state management and side effects
import { useEffect, useState } from "react";

// Import Axios library for making HTTP requests to backend API
import axios from "axios";

// Import CSS styles for component styling
import "./App.css";


// ============================================================================
// MAIN REACT COMPONENT: App
// ============================================================================
// PURPOSE: Root component rendering the commodities dashboard
// FEATURES: Data fetching, search filtering, responsive grid display

function App() {

  /* ========================================================================
     STATE VARIABLES - Manage component state
     ======================================================================== */

  // STATE: data - Stores all commodity data fetched from backend API
  // STRUCTURE: { 'gold': {...}, 'silver': {...}, etc }
  // DEFAULT: Empty object until API call completes
  const [data, setData] = useState({});

  // STATE: search - Stores current search input from user
  // USAGE: Filters displayed commodities based on user typing
  // DEFAULT: Empty string
  const [search, setSearch] = useState("");

  // STATE: loading - Tracks loading status of API request
  // USAGE: Shows "Loading..." message while fetching data, hides when done
  // VALUES: true = still loading, false = data received or error occurred
  // DEFAULT: true (start in loading state)
  const [loading, setLoading] = useState(true);



  /* ========================================================================
     EFFECT: FETCH DATA FROM API
     ======================================================================== */
  
  // useEffect Hook - Runs side effects when component mounts
  // DEPENDENCY: [] (empty array) means this runs ONCE on component mount only

  useEffect(() => {

    // Define async function for fetching data (can't use async directly in useEffect)
    const fetchData = async () => {

      // TRY BLOCK: Attempt to fetch commodity data
      try {

        // Make GET request to backend API endpoint for all commodities
        const res = await axios.get(
          "https://web-scraping-backend-k13b.onrender.com/api/metals"
        );

        // Update state with fetched commodity data from API response
        setData(res.data);

        // Set loading flag to false since data fetch is complete
        setLoading(false);

      // CATCH BLOCK: Handle API errors (network issues, server errors, etc)
      } catch (err) {

        // Log error details to browser console for debugging
        console.error("API Error:", err);

        // Set loading to false even if error occurs (stop showing loading message)
        setLoading(false);
      }
    };

    // Call the fetchData function to initiate API request
    fetchData();

  }, []); // Empty dependency array = effect runs once on mount


  /* ========================================================================
     DATA FILTERING - Filter commodities based on search text
     ======================================================================== */

  // Filter commodities using search text
  // LOGIC: Convert Object entries to array, filter by name matching search string
  // CASE SENSITIVITY: Case-insensitive comparison using toLowerCase()
  // RETURNS: Array of [name, data] pairs matching the search criteria
  const filtered = Object.entries(data).filter(([name]) =>
    // Check if commodity name includes search text (case-insensitive)
    name.toLowerCase().includes(search.toLowerCase())
  );



  /* ========================================================================
     HELPER FUNCTION - Get first letter for icon display
     ======================================================================== */

  // FUNCTION: getSymbol
  // PURPOSE: Extract first letter from commodity name for circle icon display
  // PARAMETER: name - commodity name string
  // RETURNS: First letter in uppercase
  // EXAMPLE: 'gold' returns 'G', 'silver' returns 'S'
  const getSymbol = (name) => {
    // Get first character using charAt(0) and convert to uppercase
    return name.charAt(0).toUpperCase();
  };



  /* ========================================================================
     RENDER - UI Layout and Structure
     ======================================================================== */

  return (

    <div className="container">

      {/* ====== HEADER SECTION ====== */}
      {/* Main title and subtitle of the application */}
      <div className="header">
        {/* Primary heading - main title */}
        <h1>Indian Commodities Dashboard</h1>
        {/* Subtitle with description */}
        <p>Live Market Prices | Silver Theme</p>
      </div>


      {/* ====== SEARCH INPUT BOX ====== */}
      {/* Input field for searching/filtering commodities */}
      <input
        className="search-box"
        placeholder="Search commodity (gold, silver, copper...)"
        // Update search state as user types
        onChange={(e) => setSearch(e.target.value)}
      />


      {/* ====== LOADING INDICATOR ====== */}
      {/* Display loading message while data is being fetched from API */}
      {loading && (
        <p style={{ textAlign: "center", color: "#6b7280" }}>
          Loading data...
        </p>
      )}


      {/* ====== COMMODITY CARDS GRID ====== */}
      {/* Container for responsive grid of commodity price cards */}
      <div className="cards">

        {/* MAP: Iterate through filtered commodities and create a card for each */}
        {filtered.map(([name, info]) => (

          // Individual card component for each commodity
          <div className="card" key={name}>

            {/* Circle Icon with first letter of commodity name */}
            <div className="circle">
              {/* Display first letter in uppercase inside circle */}
              {getSymbol(name)}
            </div>


            {/* Commodity Name Display */}
            <div className="name">
              {/* Show the commodity name (gold, silver, copper, etc) */}
              {name}
            </div>


            {/* Current Price Display */}
            <div className="price">
              {/* Show price with rupee symbol and value from API data */}
              ₹ {info.price}
            </div>

            <div>
              10 grams
            </div>

            {/* Price Change Information */}
            <div className="meta">
              {/* Display price change value from API data */}
              Change: {info.change}
            </div>

          </div>
        ))}

      </div>


      {/* ====== FOOTER SECTION ====== */}
      {/* Attribution and data source information */}
      <div className="footer">
        {/* Credit data source and indicate live update status */}
        Data Source: CommoditiesControl | Updated Live
      </div>

    </div>
  );
}

// Export App component as default export for use in main.jsx
export default App;
