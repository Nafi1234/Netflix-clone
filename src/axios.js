import axios from "axios";
import { BaseUrl } from "./constants/const";
const instance = axios.create({
  baseURL: BaseUrl,
});
export default instance;
