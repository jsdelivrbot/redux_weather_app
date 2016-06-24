import axios from 'axios';


const API_KEY ='04c6998a225a827777ad7bc8ef2f5292';//openweathermap.org


export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_API = 'FETCH_API';


export function fetchApi(city){

  const url = `${ROOT_URL}&q=${city},us`;
  const req = axios.get(url);
  return{
    type: FETCH_API,
    payload: req
  };
}
