import styled from 'styled-components';

export const InventoryLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: ${props => props.$width || ''};
`;

export const InventoryBodyWrap = styled.div`
  width: 996px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const HeadlineWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 200px;
  justify-content: ${props => props.$justify || ''};
`;

export const Headline2 = styled.h2`
  color: #232121;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: normal;
`;

export const SaveBtn = styled.button`
  width: 67px;
  height: 30px;
  margin-left: 200px;
  border-radius: 10px;
  background: rgba(254, 167, 167, 0.4);
  color: #232121;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;
`;

export const TableHead = styled.thead`
  background: #ffd3d3;
  height: 40px;
`;

export const TableRow = styled.tr`
  background-color: ${props => (props.isEven ? '#FFF' : '#FFEDED')};
  height: 40px;
`;

export const TableCell = styled.td`
  vertical-align: middle;
  text-align: center;
  color: #232121;
  font-size: ${props => props.$font || '14px'};
  font-weight: 700;
  line-height: normal;
`;

export const TableInput = styled.input`
  padding: 3px;
  width: 30px;
  height: 20px;
  text-align: center;
  color: #232121;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
`;
