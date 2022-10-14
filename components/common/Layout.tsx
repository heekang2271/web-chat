import styled from 'styled-components';

const Container = styled.div``;

interface Layout {
  children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
