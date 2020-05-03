import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-ecommerce-6f0e7.firebaseio.com/orders'
});

export default instance;
