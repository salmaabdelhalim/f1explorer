export const SEASONS = "SEASONS";
export const RACES = "RACES";
export const IS_LOADING = "IS_LOADING";

export const getSeasons = (seasons) => ({
  type: SEASONS,
  payload: seasons,
});

export const getRaces = (races) => ({
  type: RACES,
  payload: races,
});

export const isLoading = (isLoading) => ({
  type: IS_LOADING,
  payload: isLoading,
});
