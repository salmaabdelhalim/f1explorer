// import logo from './logo.svg';
import React, { useState, useEffect, lazy } from "react";
import "./App.css";
import Cards from "./Cards/Cards";
import ListView from "./List/ListView";
import axios from "axios";
import { Pagination, PaginationItem, Stack, Switch } from "@mui/material";
import { useDispatch } from "react-redux";
import { isLoading } from "./action";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { usePagination } from "./hooks/usePagination";
// import Seasons from "./Seasons/Seasons";
// import Races from "./Races/Races";

const SeasonsScreen = lazy(() => import("./Seasons/Seasons"));
const RacesScreen = lazy(() => import("./Races/Races"));

function App() {
  const [seasons, setSeasons] = useState([]);
  const [isListView, setIsListView] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  // const { totalPages, paginatedItems } = usePagination(isListView ? 10 : 9);
  const itemsPerPage = 10;
  // const [races, setRaces] = useState([]); // New state for races
  // const [selectedSeason, setSelectedSeason] = useState(null); // Track selected season

  useEffect(() => {
    dispatch(isLoading(true));
    axios
      .get("https://api.jolpi.ca/ergast/f1/seasons?limit=1000")
      .then((response) => {
        const seasonsData = response.data.MRData.SeasonTable.Seasons;
        setSeasons(seasonsData);
        console.log(seasonsData);
        dispatch(isLoading(false));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Fetch races for a selected season
  // const handleSeasonClick = (season) => {
  //   setSelectedSeason(season);
  //   axios
  //     .get(`https://api.jolpi.ca/ergast/f1/${season}/races`)
  //     .then((response) => {
  //       const racesData = response.data.MRData.RaceTable.Races;
  //       setRaces(racesData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setRaces([]);
  //     });
  // };

  // Calculate paginated data
  const paginatedItems = seasons.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Calculate total pages
  const totalPages = Math.ceil(seasons.length / itemsPerPage);

  return (
    <Router>
      <div className="App">
        <div className="banner">
          <img
            src={process.env.PUBLIC_URL + "/img/Formula1.png"}
            alt="F1 Logo"
            className="banner-logo"
          />
          <span className="banner-title">F1 Seasons Explorer</span>
          <Switch
            checked={isListView}
            onChange={() => setIsListView(!isListView)}
            name="list"
            color="primary"
          />
        </div>
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Stack>
                  {isListView ? (
                    <ListView
                      seasons={paginatedItems}
                      // onSeasonClick={handleSeasonClick}
                      // races={races}
                      // selectedSeason={selectedSeason}
                    />
                  ) : (
                    <Cards
                      seasons={paginatedItems}
                      // onSeasonClick={handleSeasonClick}
                      // races={races}
                      // selectedSeason={selectedSeason}
                    />
                  )}
                  <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(_, value) => setPage(value)}
                    color="primary"
                    sx={{ mt: 2, alignSelf: "center" }}
                  />
                </Stack>
              }
            />
            <Route path="/races" element={<div>Races Placeholder</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
