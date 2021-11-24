import { axiosInstance } from "../axios/axiosInstance";

const baseURL = '/auth'

export const login = ({ email, password }) => {
    return axiosInstance.post(`${baseURL}/login`, {
        email,
        password
    });
};