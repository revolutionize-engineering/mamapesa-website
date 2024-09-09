import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend.mamapesa.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token bddca8f9b4715e56222ab71466193959553d8acc`,
  },
});

export default instance;
