import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [goldData, setGoldData] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {

    axios.get("https://web-scraping-backend-k13b.onrender.com/api/metals")
      .then(res => {
        setGoldData(res.data.gold.types);
      })
      .catch(err => console.log(err));

  }, []);


  const filtered = Object.entries(goldData).filter(([name]) =>
    name.toLowerCase().includes(search.toLowerCase())
  );


  // Extract karat number (10,12,14...)
  const getKarat = (name) => {
    const match = name.match(/\d+/);
    return match ? match[0] + "K" : "";
  };


  return (

    <div className="container">

      {/* Header */}
      <div className="header">
        <h1>Gold Karats Dashboard</h1>
        <p>Live Indian Gold Purity & Prices</p>
      </div>


      {/* Search */}
      <input
        type="text"
        className="search-box"
        placeholder="Search (24K, 22K...)"
        onChange={(e) => setSearch(e.target.value)}
      />


      {/* Cards */}
      <div className="cards">

        {filtered.map(([name, price]) => (

          <div className="card" key={name}>

            {/* Ring */}
            <div className="ring">
              {getKarat(name)}
            </div>

            {/* Karat Name */}
            <div className="karat">
              {name}
            </div>

            {/* Price */}
            <div className="price">
              ₹ {price}
            </div>

            <div className="unit">
              Per 1 Grams
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;
