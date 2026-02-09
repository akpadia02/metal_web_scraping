// Import React hooks
import { useEffect, useState } from "react";

// Import Axios for API calls
import axios from "axios";

// Import CSS styling
import "./App.css";


function App() {

  /* ---------------- STATE VARIABLES ---------------- */

  // Stores all commodities data
  const [data, setData] = useState({});

  // Stores search text
  const [search, setSearch] = useState("");

  // Tracks loading status
  const [loading, setLoading] = useState(true);



  /* ---------------- FETCH DATA ---------------- */

  // Runs when component loads
  useEffect(() => {

    // Function to fetch API data
    const fetchData = async () => {

      try {

        // Call backend API
        const res = await axios.get(
          "http://127.0.0.1:5000/api/metals"
        );

        // Store response in state
        setData(res.data);

        // Stop loading
        setLoading(false);

      } catch (err) {

        // Print error in console
        console.error("API Error:", err);

        // Stop loading even if error
        setLoading(false);
      }
    };

    // Call API
    fetchData();

  }, []); // Empty dependency = run once



  /* ---------------- FILTER DATA ---------------- */

  // Filter metals based on search text
  const filtered = Object.entries(data).filter(([name]) =>
    name.toLowerCase().includes(search.toLowerCase())
  );



  /* ---------------- HELPER FUNCTION ---------------- */

  // Returns first letter of commodity
  const getSymbol = (name) => {
    return name.charAt(0).toUpperCase();
  };



  /* ---------------- UI RENDER ---------------- */

  return (

    <div className="container">

      {/* ---------- Header ---------- */}
      <div className="header">
        <h1>Indian Commodities Dashboard</h1>
        <p>Live Market Prices | Silver Theme</p>
      </div>


      {/* ---------- Search Box ---------- */}
      <input
        className="search-box"
        placeholder="Search commodity (gold, silver, copper...)"
        onChange={(e) => setSearch(e.target.value)}
      />


      {/* ---------- Loading Indicator ---------- */}
      {loading && (
        <p style={{ textAlign: "center", color: "#6b7280" }}>
          Loading data...
        </p>
      )}


      {/* ---------- Cards Section ---------- */}
      <div className="cards">

        {filtered.map(([name, info]) => (

          <div className="card" key={name}>

            {/* Circle Icon */}
            <div className="circle">
              {getSymbol(name)}
            </div>


            {/* Commodity Name */}
            <div className="name">
              {name}
            </div>


            {/* Price */}
            <div className="price">
              ₹ {info.price}
            </div>


            {/* Change */}
            <div className="meta">
              Change: {info.change}
            </div>

          </div>
        ))}

      </div>


      {/* ---------- Footer ---------- */}
      <div className="footer">
        Data Source: CommoditiesControl | Updated Live
      </div>

    </div>
  );
}

export default App;
