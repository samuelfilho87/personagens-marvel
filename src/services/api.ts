import axios from 'axios';

const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public`,
  params: {
    limit: process.env.NEXT_PUBLIC_LIMIT,
    ts: process.env.NEXT_PUBLIC_API_MARVEL_TS,
    apikey: process.env.NEXT_PUBLIC_API_MARVEL_KEY,
    hash: process.env.NEXT_PUBLIC_API_MARVEL_HASH
  }
});

export default api;
