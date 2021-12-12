import { combineReducers } from "redux";
import active from "./activeId";
import search from "./search";

export default combineReducers({
  active,
  search,
});
