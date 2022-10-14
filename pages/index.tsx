import { ReactElement } from 'react';

import Layout from '@components/common/Layout';

interface Home {}

const Home = ({}: Home) => {
  return <div>Home</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

export const getServerSideProps = async (ctx: any) => {
  return {
    props: {},
  };
};
