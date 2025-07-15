import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import ListView from "../List/ListView";
import axios from "axios";

const Races = ({ season, isListView }) => {
  const [races, setRaces] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.jolpi.ca/ergast/f1/${season}/races`)
      .then((response) => {
        const racesData = response.data.MRData.RaceTable.Races;
        setRaces(racesData);
        console.log(racesData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {isListView ? (
        <ListView isListView={isListView} races={races} />
      ) : (
        <Cards isListView={isListView} races={races} />
      )}
    </>
  );
};

export default Races;
