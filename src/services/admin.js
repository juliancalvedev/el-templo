import {privateDelete, privateGet, privatePost} from '../axios/privateInstance';

const baseURL = '/admin';

export const getUsers = () => privateGet({url: `${baseURL}/users`});

export const postNewTag = (body) => privatePost({url: `${baseURL}/tag`, body});

export const getTags = () => privateGet({url: `${baseURL}/tag`});

export const deleteTag = (id) => privateDelete({url: `${baseURL}/tag/${id}`});
