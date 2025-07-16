import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seasons from "./Seasons/Seasons";
import Races from "./Races/Races";
import Race from "./Races/Race";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="banner">
          <img
            src={process.env.PUBLIC_URL + "/img/Formula1.png"}
            alt="F1 Logo"
            className="banner-logo"
          />
          <span className="banner-title">F1 Explorer</span>
        </div>
        <div className="content">
          <Routes>
            <Route path="*" element={<Seasons />} />
            <Route path="/" element={<Seasons />} />
            <Route path=":season/races" element={<Races />} />
            <Route path=":season/race" element={<Race />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
