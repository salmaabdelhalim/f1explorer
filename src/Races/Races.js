import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Stack, Typography } from "@mui/material";
import Cards from "../Cards/Cards";
import ListView from "../List/ListView";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SpinnerComponent from "../Spinner/Spinner";

function Races({ isListView }) {
  const { season } = useParams();
  const [races, setRaces] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = isListView ? 10 : 9;

  const handleRaceClick = ({ season, round }) => {
    navigate(`/${season}/${round}/race`);
  };

  useEffect(() => {
    axios
      .get(`https://api.jolpi.ca/ergast/f1/${season}/races?limit=1000`)
      .then((response) => {
        const racesData = response.data.MRData.RaceTable.Races;
        setRaces(racesData);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [season]);

  const paginatedItems = races.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const totalPages = Math.ceil(races.length / itemsPerPage);

  return (
    <>
      <Typography variant="h3" className="header">
        Season {season} Races
      </Typography>
      {races.length < 1 ? (
        <SpinnerComponent />
      ) : (
        <Stack>
          {isListView ? (
            <ListView items={paginatedItems} onSeasonClick={handleRaceClick} />
          ) : (
            <Cards items={paginatedItems} onSeasonClick={handleRaceClick} />
          )}
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
            sx={{ mt: 2, alignSelf: "center" }}
          />
        </Stack>
      )}
    </>
  );
}

export default Races;
