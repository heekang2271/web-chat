import styled from 'styled-components';
import Avatar from './Avatar';

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

const Box = styled.div``;

const Name = styled.div``;

interface FriendBox {
  name: string;
}

const FriendBox = ({ name }: FriendBox) => {
  return (
    <Container>
      <Avatar />
      <Box>
        <Name>{name}</Name>
      </Box>
    </Container>
  );
};

export default FriendBox;
