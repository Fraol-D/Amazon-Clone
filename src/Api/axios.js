import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-0pue.onrender.com",
});

export { axiosInstance };