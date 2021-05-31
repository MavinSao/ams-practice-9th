import axios from "axios";

export default axios.create({
    baseURL: "http://110.74.194.124:3034/api",
    responseType: "json"
});