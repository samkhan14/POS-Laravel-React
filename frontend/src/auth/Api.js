import axios from "axios";

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // server API's URL
  // withCredentials: true,
});

// Api.defaults.withCredentials = true;
// Api.defaults.headers.common["Accept"] = "application/json";
// Api.defaults.headers.common["Content-Type"] = "application/json";

export default Api;
