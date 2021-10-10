import axios from "axios";
import { API_SSL_SECURED_URL} from "./APIConstants";

export default axios.create({
  baseURL: API_SSL_SECURED_URL,
  headers: {
    "Content-type": "application/json"
  }
});