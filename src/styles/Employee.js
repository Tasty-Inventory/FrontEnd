import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
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
    background-color: #ff69b4; /* 진한 분홍색 */
    color: white;
  }

  tr:nth-child(even) {
    background-color: #ffe4e1; /* 연한 분홍색 */
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
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #ff69b4; /* 분홍색 */
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #ff85c1; /* 조금 더 밝은 분홍색 */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const RegisterButton = styled(Button)`
  margin-left: 20px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  a {
    padding: 10px 20px;
    text-decoration: none;
    color: black;

    &.active {
      font-weight: bold;
      color: pink; /* 활성화된 탭의 색상 */
    }
  }
`;

export const PageTitle = styled.h1`
  text-align: left; /* 왼쪽 정렬 */
  font-size: 28px;
  margin-bottom: 30px;
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
  max-width: 1200px; /* 너비를 제한하여 화면이 꽉 차지 않도록 함 */
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
