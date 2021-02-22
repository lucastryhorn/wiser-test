import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-dev.belezaintime.com.br/portal/v1/',
});

export default api;
