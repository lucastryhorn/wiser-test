import axios from 'axios';

const api = axios.create({
  baseURL: 'https://60342b3e843b150017932363.mockapi.io',
});

export default api;
