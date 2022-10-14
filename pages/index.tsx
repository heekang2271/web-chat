import Layout from '@components/common/Layout';
import useTest from '@libs/client/useTest';
import { ReactElement } from 'react';

interface Home {}

const Home = ({}: Home) => {
  return <div>Home</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  const test = useTest();
  console.log(test);
  return <Layout>{page}</Layout>;
};

export default Home;

export const getServerSideProps = async (ctx: any) => {
  return {
    props: {},
  };
};
