import axios from "axios";
import { getItem } from "../helpers/persistance-storage";

axios.defaults.baseURL = "http://localhost:3000/api";

axios.interceptors.request.use((configure) => {
  const token = getItem("token");
  const authorization = token ? `Token ${token}` : ``;
  configure.headers.Authorization = authorization;
  return configure;
});

export default axios;
