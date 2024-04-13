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
};

export default AuthService;
