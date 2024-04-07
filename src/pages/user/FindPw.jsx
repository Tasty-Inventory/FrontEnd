import Header from '../../components/layout/Header';
import LoginForm from '../../components/layout/LoginForm';

export default function FindPw() {
  const loginInputs = [
    { type: 'text', name: 'name', placeholder: '이름' },
    { type: 'email', name: 'email', placeholder: '이메일' },
  ];
  return (
    <>
      <Header />
      <LoginForm
        title="비밀번호 찾기"
        btn_category="비밀번호 찾기"
        inputs={loginInputs}
        descriptionOnOFF={true}
        description="가입할 때 기입하셨던 이름과 이메일을 입력해주세요!"
      />
    </>
  );
}
