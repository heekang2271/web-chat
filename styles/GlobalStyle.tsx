import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-size: 15px;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    margin: 0;
    padding: 0;
    background-color: transparent;
    font: inherit;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  input, textarea, select {
    font: inherit;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    outline: none;

    &:disabled {
      opacity: 1;
    }
  }

  img {
    display: block;
  }
`;
