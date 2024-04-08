import Header from '../../components/layout/Header';
import LoginForm from '../../components/layout/LoginForm';
import React, { useState } from 'react';
import AuthService from '../../apis/AuthService';
import * as L from '../../styles/Login';
import warningIcon from '../../assets/images/warning-icon.svg';
import eyeIcon from '../../assets/images/eye-icon.svg';
import deleteIcon from '../../assets/images/delete-icon.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClearUsername = () => {
    setName('');
  };

  const handleClearEmail = () => {
    setEmail('');
  };

  const handleClearPassword = () => {
    setPassword('');
  };

  const handleClearConfirmPassword = () => {
    setConfirmPassword('');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignup = async () => {
    try {
      const response = await AuthService.signup(name, email, password);
      // 회원가입에 성공하면 적절한 처리를 수행합니다.
      console.log('회원가입 성공!', response);
      // 서버로부터 받은 메시지를 사용자에게 보여줍니다.
      alert(response.message);
      // 회원가입 성공 후 로그인 페이지로 이동 등의 처리를 수행할 수 있습니다.
    } catch (error) {
      // 서버로부터 받은 에러 객체의 상태 코드를 확인하여 에러 메시지를 설정합니다.
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessage = error.response.data.message;
        if (errorMessage.includes('email')) {
          setEmailError(errorMessage);
        } else if (errorMessage.includes('password')) {
          setPasswordError(errorMessage);
        } else if (errorMessage.includes('name')) {
          setNameError(errorMessage);
        } else {
          setErrorMessage(errorMessage);
        }
      } else {
        // 그 외의 상태 코드에 대해서는 일반적인 에러 메시지를 설정합니다.
        setErrorMessage('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <>
      <Header />
      <LoginForm title="회원가입">
        <div>
          <L.InputWrap>
            <L.LoginInput
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="이름"
              required
            />
            {name.length > 0 && (
              <L.InputBtn onClick={handleClearUsername}>
                <img src={deleteIcon} alt="삭제아이콘" />
              </L.InputBtn>
            )}
          </L.InputWrap>
          {nameError && (
            <L.WarningWrap>
              <div>
                <img src={warningIcon} alt="경고아이콘" />
              </div>
              <L.WarningLabel>{nameError}</L.WarningLabel>
            </L.WarningWrap>
          )}
        </div>
        <div>
          <L.InputWrap>
            <L.LoginInput
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="이메일"
              required
            />
            {email.length > 0 && (
              <L.InputBtn onClick={handleClearEmail}>
                <img src={deleteIcon} alt="삭제아이콘" />
              </L.InputBtn>
            )}
          </L.InputWrap>
          {emailError && (
            <L.WarningWrap>
              <div>
                <img src={warningIcon} alt="경고아이콘" />
              </div>
              <L.WarningLabel>{emailError}</L.WarningLabel>
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
          {passwordError && (
            <L.WarningWrap>
              <div>
                <img src={warningIcon} alt="경고아이콘" />
              </div>
              <L.WarningLabel>{passwordError}</L.WarningLabel>
            </L.WarningWrap>
          )}
        </div>

        <div>
          <L.InputWrap>
            <L.LoginInput
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="비밀번호 확인"
              required
            />
            {confirmPassword.length > 0 && (
              <>
                {' '}
                <L.InputBtn onClick={handleClearConfirmPassword}>
                  <img src={deleteIcon} alt="삭제아이콘" />
                </L.InputBtn>
                <L.InputBtn onClick={toggleShowConfirmPassword}>
                  <img src={eyeIcon} alt="보기아이콘" />
                </L.InputBtn>
              </>
            )}
          </L.InputWrap>
          {passwordError && (
            <L.WarningWrap>
              <div>
                <img src={warningIcon} alt="경고아이콘" />
              </div>
              <L.WarningLabel>{passwordError}</L.WarningLabel>
            </L.WarningWrap>
          )}
        </div>

        <L.LoginBtn onClick={handleSignup}>회원가입</L.LoginBtn>
        {errorMessage && <label>{errorMessage}</label>}
      </LoginForm>
    </>
  );
}
