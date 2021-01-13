import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.yelp.com',
});

export default api;