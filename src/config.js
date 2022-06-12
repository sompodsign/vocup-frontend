import axios from 'axios';

const baseApi = process.env.REACT_APP_BASE_API

const client = axios.create({
    baseURL: baseApi,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
  });

  export default client;
