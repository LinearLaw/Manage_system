const server = "http://127.0.0.1:3000";
const serverProxy = "/api";
// const serverProxy = server;
const user_service = {
  login   : serverProxy + "/dologin",
  signup  : serverProxy + "/dosignup"
}
const shop_service = {
  editshop :serverProxy + "/doeditshop",
  addshop : serverProxy + "/doaddshop"

}

export default {
  user_service,
  shop_service
}

