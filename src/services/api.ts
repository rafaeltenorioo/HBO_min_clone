import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_API_KEY
  },
  params: {
    language: 'pt-BR',
  },
});

export default api