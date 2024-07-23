import axios from 'axios';
//BASE DA URL: https://localhost:7216/

const api = axios.create({
    baseURL:'https://localhost:7216/'
});


export default api;