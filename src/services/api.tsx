import axios from 'axios';

// Create instance of axios
export const api = axios.create({
    baseURL: `${process.env.BASE_URL}`,
    timeout: 100000,
    timeoutErrorMessage: 'Exceeded timeout of 100 seconds',
});
