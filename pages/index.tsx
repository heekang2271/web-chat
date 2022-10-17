import { ReactElement } from 'react';

import Layout from '@components/common/Layout';
import useUser from '@libs/client/hook/useUser';
import protectedLogin from '@libs/client/protectedLogin';

interface Home {}

const Home = ({}: Home) => {
  const user = useUser();
  return <div>Home</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

export const getServerSideProps = async (ctx: any) => {
  await protectedLogin(ctx);
  return {
    props: {},
  };
};
