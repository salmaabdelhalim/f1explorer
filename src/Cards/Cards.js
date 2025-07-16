import React from "react";
import SeasonCard from "../Card/Card";
import { Grid } from "@mui/material";

const Cards = ({ items = [], onSeasonClick }) => {
  return (
    <Grid container justifyContent="center" spacing={4}>
      {items.map(({ season, raceName, Circuit, date }) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={season}>
          <SeasonCard
            season={season}
            raceName={raceName}
            Circuit={Circuit}
            date={date}
            onSeasonClick={onSeasonClick}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
