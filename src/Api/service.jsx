import Axios from "./callerService";

const AjoutUser = (user) => {
  return Axios.post("/api/users/", user);
};

const login = async (user) => {
  return await Axios.post("/api/users/login", user);
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};
let saveInfo = (info) => {
  localStorage.setItem("user", JSON.stringify(info));
};

let logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};

export const userServices = {
  AjoutUser,
  login,
  saveToken,
  logout,
  saveInfo,
  isLogged,
};
