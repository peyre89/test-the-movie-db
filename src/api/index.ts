import axios, { AxiosInstance } from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.themoviedb.org/3';

const instance: AxiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const getMovieUpcoming = () => instance.get('/movie/upcoming');
export const getMovieById = (id: string) => instance.get(`/movie/${id}`);
