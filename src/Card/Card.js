import { Typography, Card, Button } from "@mui/material";

const CardComponent = ({
  season,
  round,
  raceName,
  Circuit,
  date,
  onSeasonClick,
}) => {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Button onClick={() => onSeasonClick({ season, round })}>
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
            {raceName} <br /> {Circuit.circuitName} <br /> {formattedDate}
          </Typography>
        ) : (
          <Typography>{season}</Typography>
        )}
      </Card>
    </Button>
  );
};

export default CardComponent;
