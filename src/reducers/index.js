import { combineReducers } from "redux";
import users from "./users";
import user from "./user";
import loader from "./loader";
import username from "./username";

export default combineReducers({
  users,
  user,
  loader,
  username
});
