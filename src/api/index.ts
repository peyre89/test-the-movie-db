import axios, { AxiosInstance, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'en-US',
  },
});

export default instance;

export const getConfiguration = (): Promise<AxiosResponse> =>
  instance.get('/configuration');
