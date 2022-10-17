import { ReactElement } from 'react';

import Layout from '@components/common/Layout';
import styled from 'styled-components';
import initUserTableApi from '@libs/client/api/initUserTableApi';
import initFriendTableApi from '@libs/client/api/initFriendTableApi';

const Button = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #707070;
  padding: 8px 20px;
  font-size: 18px;
`;

interface Dev {}

const Dev = ({}: Dev) => {
  const handleInitUserTable = async () => {
    const res = await initUserTableApi(undefined);

    if (res.result) {
      alert('초기화 되었습니다.');
    } else {
      alert('초기화에 실패했습니다.');
    }
  };
  const handleInitFriendTable = async () => {
    const res = await initFriendTableApi(undefined);

    if (res.result) {
      alert('초기화 되었습니다.');
    } else {
      alert('초기화에 실패했습니다.');
    }
  };
  return (
    <div>
      <Button onClick={handleInitUserTable}>UserTable 초기화</Button>
      <Button onClick={handleInitFriendTable}>FriendTable 초기화</Button>
    </div>
  );
};

Dev.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dev;

export const getServerSideProps = async (ctx: any) => {
  return {
    props: {},
  };
};
