export default function changeUser(user_url) {
  return { type: "CHANGE_USER", payload: user_url };
}
