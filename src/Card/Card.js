import { Typography, Card, Button } from "@mui/material";

const SeasonCard = ({ season, raceName, Circuit, date, onSeasonClick }) => {
  return (
    <Button onClick={() => onSeasonClick({ season })}>
      <Card
        sx={{
          width: 345,
          height: 345,
          padding: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#282c34",
          color: "#ffffee",
        }}
        variant="outlined"
      >
        {raceName ? (
          <Typography className="card-text" variant="h6">
            {raceName} <br /> {Circuit.circuitName} <br /> {date}
          </Typography>
        ) : (
          <Typography>{season}</Typography>
        )}
      </Card>
    </Button>
  );
};

export default SeasonCard;
