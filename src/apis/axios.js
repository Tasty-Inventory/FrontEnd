import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': process.env.REACT_APP_SERVER_URL,
  },
});

instance.interceptors.request.use(config => {
  if (!config.method.toUpperCase().match(/^(GET|HEAD|TRACE|OPTIONS)$/)) {
    const csrfToken = Cookies.get('X-CSRF-TOKEN');
    if (csrfToken) {
      config.headers['X-CSRF-TOKEN'] = csrfToken;
    } else {
      console.error('CSRF 토큰 쿠키에 없음');
    }
  }
  return config;
});

export default instance;
