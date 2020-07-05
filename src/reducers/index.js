import { combineReducers } from "redux";
import serverStatusReducer from "./serverStatusReducer";
import validateQueryStatusReducer from "./validateQueryStatusReducer";
import handleViewReducer from "./handleViewReducer";

export default combineReducers({
  serverStatus: serverStatusReducer,
  validateQueryStatus: validateQueryStatusReducer,

  viewData: handleViewReducer,
});
