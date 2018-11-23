export default function loaderReducer(state = false, action) {
  switch (action.type) {
    case "CHANGE_LOADER":
      return action.payload;
    default:
      return state;
  }
}
