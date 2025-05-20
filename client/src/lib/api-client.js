import { HOST } from "@/utils/constants";
import axios from "axios";

console.log('HOST:', import.meta.env.VITE_SERVER_URL);


export const apiClient = axios.create({
    baseURL: HOST,
});