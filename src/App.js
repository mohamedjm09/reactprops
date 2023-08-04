// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import PlayersList from "./PlayersList";

function App() {
  return (
    <div>
      <h1>BEST Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;
