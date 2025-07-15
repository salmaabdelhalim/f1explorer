import { List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import Races from "../Races/Races";

const ListView = ({ seasons, races, selectedSeason, isListView }) => {
  return (
    <List>
      {seasons.map((season) => (
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffee",
          }}
          key={season.season}
        >
          <ListItemButton>{season.season}</ListItemButton>
          {/* Show Races component if this season is selected */}
          {selectedSeason === season.season && (
            <Races isListView={isListView} season={season.season} />
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default ListView;
