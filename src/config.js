import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
  });

  export default client;
