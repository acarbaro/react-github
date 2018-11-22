export default function usersReducer(state = "", action) {
  switch (action.type) {
    case "CHANGE_USER":
      return action.payload;
    default:
      return state;
  }
}
