import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import React from "react";

const ListView = ({ items = [], onSeasonClick }) => {
  return (
    <List>
      {items.map(({ season, round, raceName, Circuit, date }) => (
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffee",
          }}
          key={season || raceName}
        >
          <ListItemButton onClick={() => onSeasonClick({ season, round })}>
            {raceName ? (
              <Typography>
                {raceName} / {Circuit.circuitName} /{" "}
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
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
