import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokList, setPokList] = useState([]);
  const fetchPokemonName = () => {
    axios
      .get(" https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => setPokList(response.data.results));
  };
  return (
    <div className="App">
      <button className="btn" onClick={fetchPokemonName}>
        Fetch Pokemon
      </button>
      <ul style={{ width: "30%", margin: "50px auto" }}>
        {pokList.length > 0 &&
          pokList.map((pok, i) => <li key={i}>{pok.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
