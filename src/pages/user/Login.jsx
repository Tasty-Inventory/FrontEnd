import LoginForm from '../../components/layout/LoginForm';
import * as L from '../../styles/Login';
import { useState } from 'react';
import AuthService from '../../apis/AuthService';
import warningIcon from '../../assets/images/warning-icon.svg';
import eyeIcon from '../../assets/images/eye-icon.svg';
import deleteIcon from '../../assets/images/delete-icon.svg';
import { useNavigate } from 'react-router-dom';
import { useAuthDispatch } from '../../utils/AuthContext';
import kakaoIcon from '../../assets/images/kakao-icon.svg';
import naverIcon from '../../assets/images/naver-icon.svg';
import googleIcon from '../../assets/images/google-icon.svg';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useAuthDispatch();

  const handleClearUsername = () => {
    setUsername('');
  };

  const handleClearPassword = () => {
    setPassword('');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await AuthService.login(username, password);
      alert(response.message);
      dispatch({ type: 'LOGIN', payload: { username } });
      navigate('/');
    } catch (error) {
      // 에러 메시지
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessage = error.response.data.message;
        if (errorMessage.includes('이메일')) {
          setUsernameError(errorMessage);
        }
      } else {
        setErrorMessage('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
      console.error('로그인 실패:', error);
    }
  };

  const handleSocialLogin = async service => {
    try {
      await AuthService.socialSignup(service);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <LoginForm method="post" title="로그인" descriptionOnOFF={false}>
        <div>
          <L.InputWrap>
            <L.LoginInput
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="이메일"
              required
            />
            {username.length > 0 && (
              <L.InputBtn onClick={handleClearUsername}>
                <img src={deleteIcon} alt="삭제아이콘" />
              </L.InputBtn>
            )}
          </L.InputWrap>
          {usernameError && (
            <L.WarningWrap>
              <div>
                <img src={warningIcon} alt="경고아이콘" />
              </div>
              <L.WarningLabel>{usernameError}</L.WarningLabel>
            </L.WarningWrap>
          )}
        </div>

        <div>
          <L.InputWrap>
            <L.LoginInput
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="비밀번호"
              required
            />
            {password.length > 0 && (
              <>
                {' '}
                <L.InputBtn onClick={handleClearPassword}>
                  <img src={deleteIcon} alt="삭제아이콘" />
                </L.InputBtn>
                <L.InputBtn onClick={toggleShowPassword}>
                  <img src={eyeIcon} alt="보기아이콘" />
                </L.InputBtn>
              </>
            )}
          </L.InputWrap>
        </div>
        <L.LoginBtn onClick={handleLogin}>로그인</L.LoginBtn>
        {errorMessage}
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
          <L.LinkItem to="/signup">회원가입</L.LinkItem>
        </li>
      </L.FindWrap>
      <L.HrWrap>
        <L.Hr />
        <L.SNSparagraph>SNS계정 로그인</L.SNSparagraph>
        <L.Hr />
      </L.HrWrap>
      <L.SocialWrap>
        <L.SocialLoginBtn
          color="#282828"
          bgColor="#FAE64D"
          border="none"
          onClick={() => handleSocialLogin('kakao')}
        >
          <img src={kakaoIcon} alt="카카오아이콘" />
          카카오로 시작하기
        </L.SocialLoginBtn>
        <L.SocialLoginBtn
          color="#fff"
          bgColor="#01C73C"
          border="none"
          onClick={() => handleSocialLogin('naver')}
        >
          <img src={naverIcon} alt="네이버아이콘" />
          네이버로 시작하기
        </L.SocialLoginBtn>
        <L.SocialLoginBtn
          color="#282828"
          bgColor="#fff"
          border="1px solid #C5C5C5"
          onClick={() => handleSocialLogin('google')}
        >
          <img src={googleIcon} alt="구글아이콘" />
          Google로 시작하기
        </L.SocialLoginBtn>
      </L.SocialWrap>
    </>
  );
}
