import Header from '../../components/layout/Header';
import LoginForm from '../../components/layout/LoginForm';
import * as L from '../../styles/Login';

export default function Login() {
  const loginInputs = [
    {
      type: 'email',
      name: 'id',
      placeholder: '이메일',
      descriptionOnOFF: false,
    },
    {
      type: 'password',
      name: 'password',
      placeholder: '비밀번호',
      descriptionOnOFF: false,
    },
  ];
  return (
    <>
      <Header />
      <LoginForm title="로그인" btn_category="로그인" inputs={loginInputs}>
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
      </LoginForm>
    </>
  );
}
