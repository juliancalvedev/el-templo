import axios from 'axios';

const BASE_URL = 'https://el-templo.herokuapp.com/api';

const axiosInstance = axios.create({
    baseURL: BASE_URL
});

axiosInstance.interceptors.response.use((config) => {
    if(config.status === 403){
        localStorage.clear();
        window.location.href = '/';
    }
    return config;
});

export { axiosInstance };