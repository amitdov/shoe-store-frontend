import { combineReducers } from "redux";
import advancedModeReducer from "./advancedModeReducer";
import searchResultsReducer from "./searchResultsReducer";

export default combineReducers({
  advancedMode: advancedModeReducer,
  searchResults: searchResultsReducer
});
