import React, { useState, useEffect } from "react";
// import axios from "axios";
import SeasonCard from "../Card/Card";
import { Grid } from "@mui/material";

const Cards = ({ seasons, races }) => {
  //   useEffect(() => {
  //     axios
  //       .get("https://api.jolpi.ca/ergast/f1/seasons")
  //       .then((response) => {
  //         const seasonsData = response.data.MRData.SeasonTable.Seasons;
  //         setSeasons(seasonsData);
  //         console.log(seasonsData);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  return (
    <Grid container justifyContent="center" spacing={4}>
      {seasons.map((season) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={season.season}>
          <SeasonCard season={season} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
