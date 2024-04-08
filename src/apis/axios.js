import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});

instance.interceptors.request.use(config => {
  if (!config.method.toUpperCase().match(/^(GET|HEAD|TRACE|OPTIONS)$/)) {
    const csrfToken = Cookies.get('CSRF-TOKEN');
    if (csrfToken) {
      config.headers['X-CSRF-TOKEN'] = csrfToken;
    } else {
      console.error('CSRF 토큰 쿠키에 없음');
    }
  }
  return config;
});

export default instance;
