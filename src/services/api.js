import axios from "axios";

export const apiJSON = axios.create({
    baseURL: "https://dummyjson.com"
})