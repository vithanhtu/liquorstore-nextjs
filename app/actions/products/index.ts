import { API_URL_PRODUCT } from "./../../config/https";
import axios from "axios";

export const getAllProduct = async () => await axios.get(API_URL_PRODUCT);
