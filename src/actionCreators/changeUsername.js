// import getUsers from "./getUsers";

export default function changeUsername(usernameInput) {
  // return function handleUsernameThunk(dispatch, getState) {
  //   let { users, username } = getState();
  //   dispatch({ type: "CHANGE_USERNAME", payload: usernameInput });
  //   let userResults = users.filter(
  //     user => user.login.toLowerCase().search(username.toLowerCase()) !== -1
  //   );
  //   if (!usernameInput.length || !userResults.length) {
  //     userResults = [];
  //     dispatch(getUsers());
  //   } else if (userResults.length) {
  //     dispatch({ type: "GET_USERS", payload: userResults });
  //   }
  // };
  return function handleUsernameThunk(dispatch, getState) {
    dispatch({ type: "CHANGE_USERNAME", payload: usernameInput });
  };
}
