
import axios from 'axios';

class AxiosServies {

    axiosInstance = null;

    constructor() {
        this.initInstance();
    }

    initInstance() {
        this.axiosInstance = axios.create({
            baseURL: '/api/v1',
            timeout: 5000
        });

        this.axiosInstance.interceptors.request.use((config) => {
            debugger
            const token = localStorage.getItem('rentalNow_token');
            
            if (token) {
                config.headers.Authorization = `Bearer ${token}`; 
            }

            return config;
        });
    }
}

export default new AxiosServies();