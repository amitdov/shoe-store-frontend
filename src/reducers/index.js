import { combineReducers } from "redux";
import advencedModeReducer from "./advencedModeReducer";
import searchResultsReducer from "./searchResultsReducer";

export default combineReducers({
  advencedMode: advencedModeReducer,
  searchResults: searchResultsReducer
});
