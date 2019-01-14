import React from "react";
import ReactDOM from "react-dom";
import Playlist from "./playlist.jsx";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Playlist />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
