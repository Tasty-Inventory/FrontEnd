import AuthService from '../../apis/AuthService';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthDispatch } from '../../utils/AuthContext';
import * as L from '../../styles/Login';

export default function LoginNext() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userState = queryParams.get('user_state');
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const handleContinue = async () => {
    try {
      const response = await AuthService.socialLogin(userState);
      alert(response.message);
      const { email } = response.data;
      console.log(email);
      dispatch({ type: 'LOGIN', payload: { username: email } });
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <L.FormBox>
      <L.ConfirmTitle>계속 로그인 하려면 버튼을 누르세요.</L.ConfirmTitle>
      <L.ConfirmLoginBtn onClick={handleContinue}>
        로그인 계속
      </L.ConfirmLoginBtn>
    </L.FormBox>
  );
}
