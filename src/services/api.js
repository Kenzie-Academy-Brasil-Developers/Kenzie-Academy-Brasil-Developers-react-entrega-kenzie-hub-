import axios from "axios";

export const userApi = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 8000,
});
