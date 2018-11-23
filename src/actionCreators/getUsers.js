export default function getUsers() {
  return async function getUsersThunk(dispatch, getState) {
    dispatch({ type: "CHANGE_LOADER", payload: !getState().loader });
    let response = await fetch("https://api.github.com/users");
    let users = await response.json();
    if (users) {
      dispatch({ type: "CHANGE_LOADER", payload: !getState().loader });
      dispatch({ type: "GET_USERS", payload: users });
    } else {
      dispatch({ type: "CHANGE_LOADER", payload: !getState().loader });
      dispatch({ type: "GET_USERS", payload: [] });
    }
  };
}
