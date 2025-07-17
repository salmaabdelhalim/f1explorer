import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seasons from "./Seasons/Seasons";
import Races from "./Races/Races";
import Race from "./Races/Race";
import { Switch } from "@mui/material";

function App() {
  const [isListView, setIsListView] = useState(false);
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
          <span style={{ marginLeft: "auto" }}>
            <Switch
              checked={isListView}
              onChange={() => setIsListView((val) => !val)}
              color="primary"
            />
          </span>
        </div>
        <div className="content">
          <Routes>
            <Route path="*" element={<Seasons isListView={isListView} />} />
            <Route path="/" element={<Seasons isListView={isListView} />} />
            <Route
              path=":season/races"
              element={<Races isListView={isListView} />}
            />
            <Route path=":season/:round/race" element={<Race />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
