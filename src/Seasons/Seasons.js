// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Stack, Typography } from "@mui/material";
import Cards from "../SharedComponents/Card/Cards";
import ListView from "../SharedComponents/List/ListView";
import { useNavigate } from "react-router-dom";
import SpinnerComponent from "../SharedComponents/Spinner";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  & .Mui-selected {
    background-color: #ff1801;
    color: #fffeee;
  }

  & .MuiPaginationItem-textPrimary {
    color: #fffeee;
  }
`;

function Seasons({ isListView }) {
  const [seasons, setSeasons] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = isListView ? 10 : 9;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.jolpi.ca/ergast/f1/seasons?limit=1000")
      .then((response) => {
        const seasonsData = response.data.MRData.SeasonTable.Seasons;
        setSeasons(seasonsData);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const paginatedItems = seasons.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const totalPages = Math.ceil(seasons.length / itemsPerPage);

  const handleSeasonClick = ({ season }) => {
    navigate(`${season}/races`);
  };

  return (
    <Wrapper>
      <Typography variant="h3" className="header">
        Formula 1 Seasons
      </Typography>
      {!seasons ? (
        <SpinnerComponent />
      ) : (
        <Stack>
          {isListView ? (
            <ListView
              items={paginatedItems}
              onSeasonClick={handleSeasonClick}
            />
          ) : (
            <Cards items={paginatedItems} onSeasonClick={handleSeasonClick} />
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
    </Wrapper>
  );
}

export default Seasons;
