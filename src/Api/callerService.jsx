import axios from "axios";

const Axios = axios.create({
  baseURL: "https://e-commerce-back-3.onrender.com",
  // baseURL: "http://localhost:3000",
});

export default Axios;
