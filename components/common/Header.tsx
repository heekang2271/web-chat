import Link from 'next/link';
import styled from 'styled-components';
import { FiUserPlus } from 'react-icons/fi';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 20px;
`;

const H1 = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;

const Icon = styled.a`
  font-size: 20px;
`;

interface Header {
  title: string;
}

const Header = ({ title }: Header) => {
  return (
    <Container>
      <H1>{title}</H1>
      <Link href="/add">
        <Icon>
          <FiUserPlus />
        </Icon>
      </Link>
    </Container>
  );
};

export default Header;
