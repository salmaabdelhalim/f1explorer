import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DriverTable from "./DriverTable";
import { Grid, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts";
import SpinnerComponent from "../Spinner/Spinner";

const Race = () => {
  const { season, round } = useParams();
  const [raceInfo, setRaceInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.jolpi.ca/ergast/f1/${season}/${round}/results?limit=1000`
      )
      .then((response) => {
        const racesData = response.data.MRData.RaceTable.Races?.[0];
        setRaceInfo(racesData);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [season, round]);

  const chartData = raceInfo?.Results?.map((race) => {
    return {
      driver: race?.Driver?.familyName,
      time: Number(race?.Time?.millis) || 0,
    };
  });

  return (
    <div>
      <Typography className="header" variant="h3">
        Race Results
      </Typography>
      {raceInfo?.Results?.length < 1 || raceInfo.length < 1 ? (
        <SpinnerComponent />
      ) : (
        <Grid container spacing={3}>
          <Grid item size={6}>
            <DriverTable results={raceInfo.Results} />
          </Grid>
          <Grid item size={6}>
            {chartData && (
              <>
                <BarChart
                  dataset={chartData}
                  grid={{ vertical: true }}
                  layout="horizontal"
                  yAxis={[{ scaleType: "band", dataKey: "driver" }]}
                  series={[
                    {
                      dataKey: "time",
                      label: (
                        <Typography className="header" variant="h8">
                          Drivers Performance
                        </Typography>
                      ),
                    },
                  ]}
                  height={500}
                />
                <LineChart
                  dataset={chartData}
                  xAxis={[{ scaleType: "band", dataKey: "driver" }]}
                  series={[
                    {
                      dataKey: "time",
                      label: (
                        <Typography className="header" variant="h8">
                          Drivers Performance
                        </Typography>
                      ),
                    },
                  ]}
                  height={500}
                />
              </>
            )}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Race;
