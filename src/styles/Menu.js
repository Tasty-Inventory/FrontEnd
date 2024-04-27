import styled from 'styled-components';

export const MenuTitle = styled.h1`
  color: #232121;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MenuContainer = styled.div`
  background: #f7f7f7;
  width: 100%;
`;

export const MenuWrap = styled.div`
  width: 996px;
  margin: 0 auto;
  padding-top: 40px;
`;

export const SelectRadio = styled.input`
  display: none;
`;

export const MenuName = styled.label`
  color: #232121;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;

  ${SelectRadio}:checked + & {
    color: #fea7a7;
    font-weight: 700;
  }
`;

export const FlexLayout = styled.ul`
  display: flex;
  gap: 20px;
`;

export const MenuLayout = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled.button`
  width: 160px;
  height: 45px;
  border-radius: 10px;
  background: #7b7a7a;
  border: none;
  color: #f5f5f5;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
`;
