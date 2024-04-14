// AuthService.js

import instance from './axios';

const AuthService = {
  login: async (username, password) => {
    try {
      const response = await instance.post('/authorize', {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  signup: async (name, email, password) => {
    try {
      const response = await instance.post('/users', {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  logout: async () => {
    try {
      const response = await instance.post('/logout');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // 소셜 로그인 (카카오, 네이버, 구글)
  // socialSignup: async () => {
  //   const params = {
  //     redirect_uri: 'https://localhost:3000/loginnext',
  //     callback: 'login',
  //   };
  //   try {
  //     const response = await instance.get('/oauth2/authorize/google', {
  //       params,
  //     });
  //     const authURL = response.data;
  //     window.location.href = authURL;
  //   } catch (error) {
  //     throw error;
  //   }
  // },

  socialSignup: async service => {
    let serviceUri;
    switch (service) {
      case 'google':
        serviceUri = '/oauth2/authorize/google';
        break;
      case 'naver':
        serviceUri = '/oauth2/authorize/naver';
        break;
      case 'kakao':
        serviceUri = '/oauth2/authorize/kakao';
        break;
      default:
        throw new Error('지원하지 않는 서비스');
    }

    const params = {
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      callback: 'login',
    };

    try {
      const response = await instance.get(serviceUri, { params });
      const authURL = response.data;
      window.location.href = authURL;
    } catch (error) {
      throw error;
    }
  },

  socialLogin: async user_state => {
    try {
      const response = await instance.get('/oauth2/authorize', {
        params: {
          user_state: user_state,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default AuthService;
