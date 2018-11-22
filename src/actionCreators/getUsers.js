export default function getUsers() {
  return async function getUsersThunk(dispatch, getState) {
    let response = await fetch("https://api.github.com/users");
    let users = await response.json();
    if (users) {
      dispatch({ type: "GET_USERS", payload: users });
    } else {
      dispatch({ type: "GET_USERS", payload: [] });
    }
  };
}
