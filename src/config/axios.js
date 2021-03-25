import axios from 'axios'

import { URL } from "./vars";


const clientAxios = axios.create({
    baseURL: URL
});

export default clientAxios;