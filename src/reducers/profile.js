export default function profileReducer(state = "", action) {
  switch (action.type) {
    case "CHANGE_PROFILE":
      return action.payload;
    default:
      return state;
  }
}
