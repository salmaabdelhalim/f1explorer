import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seasons from "./Seasons/Seasons";
import Races from "./Races/Races";
import Race from "./Races/Race";
import { styled, Switch } from "@mui/material";
import Formula1Img from "./assets/images/Formula1.png";
import CardTextIcon from "./assets/icons/card-text.svg";
import ListTaskIcon from "./assets/icons/list-task.svg";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(${ListTaskIcon})`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
        ...theme.applyStyles("dark", {
          backgroundColor: "#8796A5",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#ffffee",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${CardTextIcon})`,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#003892",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
    ...theme.applyStyles("dark", {
      backgroundColor: "#8796A5",
    }),
  },
}));

function App() {
  const [isListView, setIsListView] = useState(false);
  return (
    <Router>
      <div className="App">
        <div className="banner">
          <img src={Formula1Img} alt="F1 Logo" className="banner-logo" />
          <span className="banner-title">F1 Explorer</span>
          <span style={{ marginLeft: "auto" }}>
            <MaterialUISwitch
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
