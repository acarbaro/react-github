import { combineReducers } from "redux";
import users from "./users";
import user from "./user";
import loader from "./loader";

export default combineReducers({
  users,
  user,
  loader
});
