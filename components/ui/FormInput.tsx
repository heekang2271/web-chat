import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Input = styled.input`
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

const Error = styled.span`
  display: block;
  font-size: 13px;
  margin-top: 6px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.errorColor};
`;

interface FormInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const FormInput = React.forwardRef(({ error, ...rest }: FormInput, ref: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <Container>
      <Input ref={ref} {...rest} />
      {error && <Error>{error}</Error>}
    </Container>
  );
});

export default FormInput;
