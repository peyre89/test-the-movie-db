import axios from 'axios';

import { makeUseAxios } from 'axios-hooks';

const config = {
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'en-US',
  },
};

const useAxios = makeUseAxios({
  axios: axios.create(config),
});

export { useAxios };
