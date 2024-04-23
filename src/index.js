import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import App from './App';

axios
  .get(`${process.env.REACT_APP_SERVER_URL}csrf-token`, {
    withCredentials: true,
  })
  .then(response => {
    const csrfToken = response.data['CSRF-TOKEN'];
    // console.log(csrfToken);
    Cookies.set('X-CSRF-TOKEN', csrfToken); // 쿠키에 CSRF 토큰 저장
  })
  .catch(error => {
    console.error('Error fetching CSRF token:', error);
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
