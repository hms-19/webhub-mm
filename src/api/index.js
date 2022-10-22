import axios from "axios";


export const api = axios.create({
    baseURL: 'http://webhub-api.test/api',
    headers: {
        //'Authorization': 'token <your-token-here>'
    }
})