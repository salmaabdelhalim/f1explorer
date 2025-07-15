export function getSeasonsData() {
  axios
    .get("https://api.jolpi.ca/ergast/f1/seasons?limit=1000")
    .then((response) => {
      return response.data.MRData.SeasonTable.Seasons;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getRacesData() {
  axios
    .get(`https://api.jolpi.ca/ergast/f1/${season}/races?limit=1000`)
    .then((response) => {
      return response.data.MRData.RaceTable.Races;
    })
    .catch((error) => {
      console.log(error);
    });
}
