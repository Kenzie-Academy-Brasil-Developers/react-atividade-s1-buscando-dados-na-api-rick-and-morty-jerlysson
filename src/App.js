import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        return response.json();
      })
      .then((response) => setCharactersList(response.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Requisição a APT</h1>
        <p>Rick and Morty</p>
      </header>
      <section className="container">
        <Characters charactersList={charactersList} />
      </section>
    </div>
  );
}

export default App;
