import axios from 'axios';
import webconfig from './webconfig.json'
const instance = axios.create({
    baseURL: webconfig.devConnectionString
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';
instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

// instance.interceptors.request...

export default instance;