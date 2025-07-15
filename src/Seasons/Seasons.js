// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
// import "./App.css";
import Cards from "../Cards/Cards";
import ListView from "../List/ListView";
import axios from "axios";
// import { Switch } from "@mui/material";

function Seasons({ isListView }) {
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      {isListView ? (
        <ListView seasons={seasons} />
      ) : (
        <Cards seasons={seasons} />
      )}
    </>
  );
}

export default Seasons;
