import React from 'react';
import * as L from '../../styles/Login';

function LoginForm() {
  return (
    <L.FormBox>
      <L.FormTitle>로그인</L.FormTitle>
      <L.Form>
        <L.InputWrap>
          <L.LoginInput type="text" name="id" placeholder="이메일" />
        </L.InputWrap>
        <L.InputWrap>
          <L.LoginInput
            type="password"
            name="password"
            placeholder="비밀번호"
          />
        </L.InputWrap>
        <L.LoginBtn type="submit">로그인</L.LoginBtn>
      </L.Form>
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
    </L.FormBox>
  );
}

export default LoginForm;
