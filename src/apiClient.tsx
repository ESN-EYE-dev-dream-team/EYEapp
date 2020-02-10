import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://graph.facebook.com/v6.0/',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
