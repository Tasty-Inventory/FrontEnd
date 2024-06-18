import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: flex-end;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
`;

export const TitleSecond = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  margin-left: 320px;
`;

export const TitleThird = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  margin-left: 350px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  th,
  td {
    border: 1px solid transparent; /* 구분선을 투명색으로 변경 */
    padding: 8px;
    text-align: center; /* 데이터 값을 가운데 정렬 */
  }
  th {
    background-color: #fed2d2; /* 진한 분홍색 */
    color: black;
    font-weight: bold;
  }
  tr:nth-child(even) {
    background-color: #ffeded; /* 연한 분홍색 */
  }
  tr:nth-child(odd) {
    background-color: #fff;
  }
  tr:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  div {
    flex: 1 1 calc(50% - 20px);
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
`;

export const Button = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 15px;
  background-color: #ffdcdc; /* 분홍색 */
  color: black;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const VButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const RegisterButton = styled(Button)``;
export const EmployeeTitle = styled.h1`
  color: #232121;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 30px;
`;
export const EmployeeContainer = styled.div`
  background: #fff;
  width: 100%;
  margin-top: 80px;
`;

export const EmployeeWrap = styled.div`
  width: 996px;
  margin: 0 auto;
`;

export const Tabs = styled.div`
  display: flex;
  width: 996px;
  justify-content: flex-start;
  margin-bottom: 20px;
  a {
    padding: 10px 20px;
    text-decoration: none;
    color: black;
    &.active {
      font-weight: bold;
      color: pink;
    }
  }
`;
export const FlexLayout = styled.ul`
  display: flex;
  gap: 20px;
`;

export const EmployeeLayout = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const EmployeeName = styled.label`
  color: #232121;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
`;

export const PageTitle = styled.h1`
  text-align: left; /* 왼쪽 정렬 */
  font-size: 28px;
  margin-bottom: 30px;
  padding-left: 20px;
`;

export const LoadingMessage = styled.div`
  font-size: 18px;
  color: #999;
`;

export const ErrorMessage = styled.div`
  font-size: 18px;
  color: red;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const AddForm = styled.div`
  margin: 20px 0;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputWrap = styled.div`
  margin-bottom: 15px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const SubmitButton = styled(Button)`
  background-color: #2196f3;
  &:hover {
    background-color: #1976d2;
  }
`;

export const PageContainer = styled(Container)`
  width: 100%; /* 너비를 제한하여 화면이 꽉 차지 않도록 함 */
  margin: 0 auto; /* 가운데 정렬 */
  padding: 40px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContentContainer = styled(Container)`
  background: #fff;
  width: 996px;
  margin: 0 auto;
  padding: 20px;
`;

export const TabContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4caf50;
  }
  &.active {
    border-bottom: 2px solid #4caf50;
    color: #ff69b4; /* 분홍색 */
    font-weight: bold; /* 볼드 처리 */
  }
`;

export const NavigationButton = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0 5px;
  font-size: 16px;
  cursor: pointer;
  padding: 1px;
  padding-right: 10px;
  padding-left: 10px;

  &:hover {
    background-color: transparent;
  }

  &:active {
    background-color: transparent;
  }
`;

export const Select = styled.select`
  padding: 10px;
  margin-top: 20px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 16px;
  width: 100%;
`;

export const NavigationAndTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
