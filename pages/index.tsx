import { ReactElement } from 'react';

import Layout from '@components/common/Layout';
import useUser from '@libs/client/hook/useUser';
import protectedLogin from '@libs/client/protectedLogin';
import Header from '@components/common/Header';
import styled from 'styled-components';
import Avatar from '@components/common/Avatar';
import FriendBox from '@components/common/FriendBox';

const Section = styled.section`
  padding: 10px 0;
`;

const SectionTitle = styled.h4`
  padding: 0 20px;
  color: ${(props) => props.theme.lightTextColor};
  font-size: 13px;
`;

const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
`;

interface Home {}

const Home = ({}: Home) => {
  const user = useUser();
  return (
    <>
      <Section>
        <FriendList>{user && <FriendBox name={user.name} />}</FriendList>
      </Section>
      <Section>
        <SectionTitle>즐겨찾기</SectionTitle>
      </Section>
      <Section>
        <SectionTitle>친구</SectionTitle>
      </Section>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout hasSidebar hasHeader title="친구">
      {page}
    </Layout>
  );
};

export default Home;

export const getServerSideProps = async (ctx: any) => {
  await protectedLogin(ctx);
  return {
    props: {},
  };
};
