import { combineReducers } from "redux";
import authentication from "./authReducer";
import servers from "./serversReducer";

const rootReducer = combineReducers({
  servers,
  auth: authentication,
});

export default rootReducer;
