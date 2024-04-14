import AuthService from '../../apis/AuthService';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthDispatch } from '../../utils/AuthContext';

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
      const { email } = response;
      dispatch({ type: 'LOGIN', payload: { username: email } });
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {/* "계속하기" 버튼을 추가하고 클릭 시 handleContinue 함수를 호출합니다. */}
      <button onClick={handleContinue}>계속하기</button>
    </>
  );
}
