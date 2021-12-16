import axios from "axios";

const API_URL = "https://api.weatherapi.com/v1/forecast.json";
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchDays = (zip) => {
  console.log(API_KEY);
  return axios.get(`${API_URL}?q=${zip}&days=7`, {
    headers: {
      key: API_KEY,
    },
  });
};
