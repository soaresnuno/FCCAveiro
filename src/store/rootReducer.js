import { combineReducers } from "redux";

import navbar from "./Navbar/reducers";
import darkmode from "./Darkmode/reducers";
import content from "./Content/reducers";

const rootReducer = combineReducers({ navbar, darkmode, content });

export default rootReducer;
