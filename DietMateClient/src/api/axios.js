import axios from 'axios';

export default axios.create({
    baseURL: 'https://dietmate-server.herokuapp.com/api/',
});