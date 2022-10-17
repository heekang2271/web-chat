import styled from 'styled-components';
import Sidebar from './Sidebar';

const Container = styled.div`
  width: 100%;
  max-width: 440px;
  margin: 20px auto;
  background-color: ${(props) => props.theme.bgColor};
  height: calc(100vh - 40px);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  display: flex;
`;

const Main = styled.div``;

interface Layout {
  hasSidebar: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children, hasSidebar = false }) => {
  return (
    <Container>
      {hasSidebar && <Sidebar />}
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
