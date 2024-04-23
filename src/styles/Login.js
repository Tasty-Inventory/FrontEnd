import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormBox = styled.div`
  width: 358px;
  margin: 60px auto 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const FormTitle = styled.h3`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 58px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #e4e1e1;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

export const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: #232121;
  color: #fff;
  padding: 18px 0;
  font-size: 18px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;

export const LinkItem = styled(Link)`
  color: #232121;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
`;

export const FindWrap = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 358px;
  margin: 0 auto;
`;

export const Contour = styled.hr`
  height: 14px;
  border: 0.5px solid #232121;
`;

export const FormDescription = styled.p`
  color: #7b7a7a;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  line-height: 150%;
`;

export const WarningWrap = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-top: 8px;
`;

export const WarningLabel = styled.label`
  color: #ff5848;
  font-size: 12px;
  font-weight: 700;
`;

export const InputBtn = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px;
`;

export const HrWrap = styled.div`
  display: flex;
  width: 358px;
  justify-content: center;
  margin: 40px auto;
  gap: 16px;
`;

export const SNSparagraph = styled.p`
  color: #232121;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
`;

export const Hr = styled.hr`
  width: 100%;
  border-width: 1px 0 0 0;
  border-color: #000;
`;

export const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 358px;
  margin: 0 auto;
  gap: 16px;
`;

export const SocialLoginBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  height: 58px;
  border-radius: 8px;
  color: ${props => props.color};
  background: ${props => props.backgroundColor};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  border: ${props => props.border};
  cursor: pointer;
`;

export const ConfirmTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const ConfirmLoginBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 58px;
  border-radius: 8px;
  background: #232121;
  color: #fff;
  font-size: 18px;
  border: none;
  cursor: pointer;
  margin: 20px 0;
`;
