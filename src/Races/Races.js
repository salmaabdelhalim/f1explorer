import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Stack, Switch } from "@mui/material";
import Cards from "../Cards/Cards";
import ListView from "../List/ListView";
import { useNavigate, useParams } from "react-router-dom";

function Races() {
  const { season } = useParams();
  const [races, setRaces] = useState([]);
  const [page, setPage] = useState(1);
  const [isListView, setIsListView] = useState(false);
  const navigate = useNavigate();
  const itemsPerPage = isListView ? 10 : 9;

  const handleRaceClick = (season) => {
    navigate(`/${season}/race`);
  };

  useEffect(() => {
    axios
      .get(`https://api.jolpi.ca/ergast/f1/${season}/races`)
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
    <Stack>
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}
      >
        <Switch
          checked={isListView}
          onChange={() => setIsListView((val) => !val)}
          color="primary"
        />
      </div>
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
  );
}

export default Races;
