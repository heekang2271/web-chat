import styled from 'styled-components';
import Header from './Header';
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
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

interface Layout {
  hasSidebar?: boolean;
  hasHeader?: boolean;
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children, hasSidebar = false, hasHeader = false, title }) => {
  return (
    <Container>
      {hasSidebar && <Sidebar />}
      <Wrapper>
        {hasHeader && <Header title={title!} />}
        <Main>{children}</Main>
      </Wrapper>
    </Container>
  );
};

export default Layout;
