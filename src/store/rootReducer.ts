import contents from "./contents/reducer";
import header from "./header/reducer";
import home from "./home/reducer";

import { combineReducers } from "redux";

export default combineReducers({ contents, header, home });
