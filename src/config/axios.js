import axios from 'axios'

const clientAxios = axios.create({
    baseURL: 'http://18.205.67.173:5001/'
});

export default clientAxios;