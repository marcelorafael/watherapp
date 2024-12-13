import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com/weather'
});

export default api;

//https://api.hgbrasil.com/weather?key=34664f77&lat=-23.682&lon=-46.875&user_ip=remote

// https://api.hgbrasil.com/weather?key=34664f77&lat=-1.455833&lon=%20-48.503887&user_ip=remote

// PNG:
// http://openweathermap.org/img/wn/10d@2x.png