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
  flex-wrap: wrap;
  gap: 20px;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 214px;
  height: auto;
  padding: 10px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  cursor: pointer;
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

export const AddPageContainer = styled.div`
  width: 390px;
  margin: 48px auto 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
`;

export const AddPageHeadline = styled.h1`
  color: #232121;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  gap: ${props => props.gap || '0px'};
  align-items: ${props => props.align || 'normal'};
  justify-content: ${props => props.justify || 'flex-start'};
`;

export const InputLabel = styled.label`
  color: #7b7a7a;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 50px;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid #e4e1e1;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 15px;
  background: ${props => props.back || '#fff'};

  color: ${props => props.color || '#7B7A7A'};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  border: ${props => props.border || 'none'};
  cursor: pointer;
`;

export const OpenButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 15px;
  background: #d3d3d3;
  border: none;
  color: #232121;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;

  & th {
    vertical-align: middle;
    color: #232121;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & > thead {
    background: #d3d3d3;
    height: 50px;
  }
  & td {
    height: 50px;
    vertical-align: middle;
    color: #232121;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
  }
`;

export const ErrorMessage = styled.h1`
  font-size: 18px;
  font-weight: 600;
  padding: 20px 0;
  text-align: center;
`;

export const ModalContainer = styled.div`
  width: 650px;
  min-height: 500px;
  background: #fff;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  text-align: center;
`;

export const ModalTitle = styled.h2`
  color: #000;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 30px 0;
`;

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
