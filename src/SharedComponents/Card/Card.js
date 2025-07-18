import { Typography, Card, Button, styled } from "@mui/material";

const StyledText = styled(Typography)`
  vertical-align: middle;
  text-align: center;
  color: #ffffff;
  letter-spacing: 1px;
`;

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
          border: "2px solid #b0b3b8",
          borderRadius: "12px",
        }}
        variant="outlined"
      >
        {raceName ? (
          <StyledText variant="h6">
            {raceName} <br /> {Circuit.circuitName} <br /> {formattedDate}
          </StyledText>
        ) : (
          <Typography>{season}</Typography>
        )}
      </Card>
    </Button>
  );
};

export default CardComponent;
