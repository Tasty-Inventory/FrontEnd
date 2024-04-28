import styled from 'styled-components';

export const MenuTitle = styled.h1`
  color: #232121;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MenuContainer = styled.div`
  background: #fff;
  width: 100%;
`;

export const MenuWrap = styled.div`
  width: 996px;
  margin: 0 auto;
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

export const MenuBodyWrap = styled.div`
  width: 996px;
  margin: 20px auto;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 234px;
  height: auto;
  padding: 10px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
`;

export const ImgWrap = styled.div`
  width: 100px;
  height: 100px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
`;

export const MenuContentTitle = styled.h3`
  color: #232121;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MenuContentCategory = styled.span`
  color: #a7a6a6;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MenuBodyContainer = styled.div`
  width: 100%;
  background: #f7f7f7;
  padding: 10px 0;
`;
