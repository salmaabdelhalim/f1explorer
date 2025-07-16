import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Race = () => {
  const { season } = useParams();
  console.log("seasons: ", { ...season });
  const [raceInfo, setRaceInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.jolpi.ca/ergast/f1/${season}/results`)
      .then((response) => {
        const racesData = response.data.MRData.RaceTable.Races.Results;
        console.log("raceData: ", response);
        setRaceInfo(racesData);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [season]);

  return (
    <div>
      <h2>Race Results</h2>
      {raceInfo.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {raceInfo.map((result, idx) => (
            <li key={idx}>
              {result.Driver.givenName} {result.Driver.familyName} - Position:{" "}
              {result.position}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Race;
