import axios from "axios";
import { ENV } from "../constants/environment";

const http = axios.create({
  baseURL: ENV.serverUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
