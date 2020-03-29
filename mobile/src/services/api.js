import axios from 'axios';

const api = axios.create({
    baseURL: 'http://1e0ffb1e.ngrok.io/'
});

export default api;