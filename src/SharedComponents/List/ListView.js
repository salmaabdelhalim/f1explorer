import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";

const ListView = ({ items = [], onSeasonClick }) => {
  return (
    <List id="list-item" sx={{ width: "100%" }}>
      {items.map(({ season, round, raceName, Circuit, date }) => (
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffee",
            mb: 2,
          }}
          key={season || raceName}
        >
          <ListItemButton
            id="list-button"
            onClick={() => onSeasonClick({ season, round })}
            sx={{
              display: "flex",
            }}
          >
            {raceName ? (
              <Grid
                container
                columns={12}
                spacing={3}
                direction="row"
                sx={{
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Grid item xs={4}>
                  <Typography align="center">{raceName} </Typography>
                  <br />
                </Grid>
                <Grid item xs={4}>
                  <Typography align="center">{Circuit.circuitName}</Typography>
                  <br />
                </Grid>
                <Grid item xs={4}>
                  <Typography align="center">
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Typography>
                  <br />
                </Grid>
              </Grid>
            ) : (
              <Typography>{season}</Typography>
            )}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ListView;
