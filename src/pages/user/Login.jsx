import Header from '../../components/layout/Header';
import LoginForm from '../../components/layout/LoginForm';
import * as L from '../../styles/Login';
import { useState } from 'react';
import AuthService from '../../apis/AuthService';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await AuthService.login(username, password);
      // 로그인에 성공하면 적절한 처리를 수행합니다.
      console.log('로그인 성공!', response);
    } catch (error) {
      // 로그인에 실패하면 에러 메시지를 표시합니다.
      // setErrorMessage('로그인 실패. 사용자명 또는 비밀번호를 확인해주세요.');
      console.error('로그인 실패:', error);
    }
  };
  return (
    <>
      <Header />
      <LoginForm title="로그인" descriptionOnOFF={false}>
        <L.InputWrap>
          <L.LoginInput
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="이메일"
          />
        </L.InputWrap>
        <L.InputWrap>
          <L.LoginInput
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
        </L.InputWrap>
        <L.LoginBtn onClick={handleLogin}>로그인</L.LoginBtn>
      </LoginForm>
      <L.FindWrap>
        <li>
          <L.LinkItem to="/findid">아이디 찾기</L.LinkItem>
        </li>
        <li>
          <L.Contour />
        </li>
        <li>
          <L.LinkItem to="/findpw">비밀번호 찾기</L.LinkItem>
        </li>
        <li>
          <L.Contour />
        </li>
        <li>
          <L.LinkItem to="/register">회원가입</L.LinkItem>
        </li>
      </L.FindWrap>
    </>
  );
}
