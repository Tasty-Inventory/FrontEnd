import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormBox = styled.div`
  width: 358px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
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
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

export const Contour = styled.hr`
  height: 14px;
  border: 0.5px solid #232121;
`;
