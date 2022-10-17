import styled from 'styled-components';

export default styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.inputBgColor};
  color: #ffffff;
  padding: 10px 12px;
  border: 1px solid ${(props) => props.theme.inputBorderColor};
  margin-bottom: 6px;

  &:-webkit-autofill {
    -webkit-text-fill-color: #ffffff;
    -webkit-box-shadow: 0 0 0 1000px ${(props) => props.theme.inputBgColor} inset;
    color: #ffffff;
  }

  &::placeholder {
    color: #a0a0a0;
  }

  &:focus {
    background-color: ${(props) => props.theme.bgColor};
  }
`;
