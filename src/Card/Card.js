import { Typography, Card, CardContent } from "@mui/material";

const SeasonCard = ({ season }) => {
  return (
    <div>
      <Card
        sx={{
          width: 345,
          height: 345,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#282c34",
          color: "#ffffee",
        }}
        variant="outlined"
      >
        {/* <CardContent className="card-text"> */}
        <Typography className="card-text" variant="h6">
          {season.season}
        </Typography>
        {/* </CardContent> */}
      </Card>
    </div>
  );
};

export default SeasonCard;
