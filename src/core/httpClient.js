import axios from 'axios';

export default axios.create({
  baseURL: 'https://google-translate1.p.rapidapi.com/language',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': '212ebc3c75msh4d1f1e632b4b95dp11f31bjsndde269a3697b',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
  },
});
