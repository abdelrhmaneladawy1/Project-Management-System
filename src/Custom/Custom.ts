import axios from "axios";

const baseUrl = axios.create({
  baseURL: `https://upskilling-egypt.com:3003/`,
});
const requestHeaders = `${localStorage.getItem("authToken")}`;

export { requestHeaders };
export default baseUrl;
