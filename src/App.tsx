import React from "react";
import "./App.css";

function App() {
  const secret = process.env.TEST_KEY;
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ textAlign: "center" }}>Welcome to my Demo App</h1>
        <p>{secret}</p>
        <a
          className="App-link"
          href="https://biskremer.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Biskremer
        </a>
      </header>
    </div>
  );
}

export default App;
