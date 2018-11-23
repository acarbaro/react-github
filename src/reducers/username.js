export default function usernameReducer(state = "", action) {
  switch (action.type) {
    case "CHANGE_USERNAME":
      return action.payload;
    default:
      return state;
  }
}
