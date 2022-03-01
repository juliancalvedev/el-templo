import { privateGet } from '../axios/privateInstance';

const baseURL = '/admin';

export const getUsers = () => privateGet({ url: `${baseURL}/users` });
