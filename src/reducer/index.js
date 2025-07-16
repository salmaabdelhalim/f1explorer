import { IS_LOADING, RACES, SEASONS } from "../action";

const initialState = { seasons: [], races: [], isLoading: false };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEASONS":
      return { ...state, seasons: action.payload };
    case "RACES":
      return { ...state, races: action.payload };
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
  }
};

export default appReducer;
