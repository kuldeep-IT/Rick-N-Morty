import axios from 'axios';
import { baseURL } from '../config/app-urls';

const baseAxios = axios.create({
    baseURL: baseURL,
    // You can add more default settings here (like headers, if needed)
});

export default baseAxios;