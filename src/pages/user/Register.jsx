import Header from '../../components/layout/Header';
import LoginForm from '../../components/layout/LoginForm';

export default function Register() {
  const loginInputs = [
    { type: 'text', name: 'name', placeholder: '이름' },
    { type: 'email', name: 'email', placeholder: '이메일' },
    {
      type: 'password',
      name: 'password',
      placeholder: '비밀번호',
      descriptionOnOFF: false,
    },
    {
      type: 'password',
      name: 'password_check',
      placeholder: '비밀번호 확인',
      descriptionOnOFF: false,
    },
  ];
  return (
    <>
      <Header />
      <LoginForm
        title="회원가입"
        btn_category="회원가입"
        inputs={loginInputs}
        descriptionOnOFF={true}
      />
    </>
  );
}
