import LoginForm from '../../components/layout/LoginForm';

export default function FindId() {
  const loginInputs = [{ type: 'text', name: 'name', placeholder: '이름' }];
  return (
    <LoginForm
      title="아이디 찾기"
      btn_category="아이디 찾기"
      inputs={loginInputs}
      descriptionOnOFF={true}
      description="가입할 때 기입하셨던 이름을 입력해주세요!"
    />
  );
}
