import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 52px;
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
`;

const Logo: React.FC = () => {
  return <H1>TALK</H1>;
};

export default Logo;
