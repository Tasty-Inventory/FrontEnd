// AuthService.js

import instance from './axios';

const AuthService = {
  login: async (username, password) => {
    try {
      const response = await instance.post('/authorize', {
        username,
        password,
      });
      // 로그인에 성공하면 서버로부터 받은 응답을 반환합니다.
      return response.data;
    } catch (error) {
      // 로그인에 실패하면 에러를 throw 합니다.
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
      console.log(response);
      // 회원가입에 성공하면 서버로부터 받은 응답을 반환합니다.
      return response.data;
    } catch (error) {
      // 서버로부터 받은 에러 객체를 그대로 throw 합니다.
      throw error;
    }
  },
};

export default AuthService;
