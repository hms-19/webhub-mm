import axios from "axios";


export const api = axios.create({
    baseURL: 'https://api.webhubmm.com/api',
    // baseURL: 'http://webhub-api.test/api',
    headers: {
        'Access-Control-Allow-Origin' : '*',
    }
})