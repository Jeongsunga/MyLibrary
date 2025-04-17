import axios from "axios";

const api = axios.create({
    baseURL: 'http://openlibrary.org',
    timeout: 1000,
});

export default api;