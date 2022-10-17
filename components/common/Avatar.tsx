import styled from 'styled-components';
import { RiUserFill } from 'react-icons/ri';

interface Container {
  size: number;
}

const Container = styled.div<Container>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  min-width: ${(props) => `${props.size}px`};
  min-height: ${(props) => `${props.size}px`};
  border-radius: 40%;
  background-color: #70a1ff;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Avatar {
  size?: number;
}

const Avatar = ({ size = 40 }: Avatar) => {
  return (
    <Container size={size}>
      <RiUserFill />
    </Container>
  );
};

export default Avatar;
