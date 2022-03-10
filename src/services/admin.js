import {privateGet, privatePost} from '../axios/privateInstance';

const baseURL = '/admin';

export const getUsers = () => privateGet({url: `${baseURL}/users`});

export const postNewTag = (body) => privatePost({url: `${baseURL}/tag`, body})
