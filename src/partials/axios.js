import axiosBase from 'axios';

const axios = axiosBase.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        data:{}  
    },
    responseType: 'json',
    withCredentials:true
});

export default axios;