import { combineReducers } from "redux";
import serverStatusReducer from "./serverStatusReducer";
import searchResultsReducer from "./searchResultsReducer";
import handleViewReducer from "./handleViewReducer";

export default combineReducers({
  serverStatus: serverStatusReducer,
  searchResults: searchResultsReducer,
  viewData: handleViewReducer,
});
