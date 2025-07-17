import React from "react";
import CardComponent from "../Card/Card";
import { Grid } from "@mui/material";

const Cards = ({ items = [], onSeasonClick }) => {
  return (
    <Grid container justifyContent="center" spacing={4}>
      {items.map(({ season, round, raceName, Circuit, date }) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={season}>
          <CardComponent
            season={season}
            round={round}
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
