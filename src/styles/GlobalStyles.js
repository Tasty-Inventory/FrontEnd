import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  font-family: 'Pretendard';
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox  */
input[type='number'] {
  -moz-appearance: textfield;
}
`;

export default GlobalStyles;
