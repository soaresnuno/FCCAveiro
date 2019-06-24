import { combineReducers } from 'redux';

import navbar from './Navbar/reducers';
import darkmode from './Darkmode/reducers';
import apidata from './Api/reducers';

const rootReducer = combineReducers({ navbar, darkmode, apidata });

export default rootReducer;
