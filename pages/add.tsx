import { ReactElement, useState } from 'react';

import Layout from '@components/common/Layout';
import useUser from '@libs/client/hook/useUser';
import protectedLogin from '@libs/client/protectedLogin';
import Header from '@components/common/Header';
import styled from 'styled-components';
import Avatar from '@components/common/Avatar';
import { useForm } from 'react-hook-form';
import searchUserApi, { SearchUserResult } from '@libs/client/api/searchUserApi';
import FriendBox from '@components/common/FriendBox';

const SearchBox = styled.form`
  padding: 20px 20px;

  span {
    display: block;
    font-size: 12px;
    color: ${(props) => props.theme.lightTextColor};
    margin-top: 10px;
  }
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
  padding: 6px 4px;
  color: #ffffff;

  &:-webkit-autofill {
    -webkit-text-fill-color: ${(props) => props.theme.textColor};
    -webkit-box-shadow: 0 0 0 1000px ${(props) => props.theme.bgColor} inset;
    color: #ffffff;
  }

  &::placeholder {
    color: #a0a0a0;
  }

  &:focus {
    background-color: 'transparent';
  }
`;

const ResultBox = styled.div``;

const NotFound = styled.span`
  display: block;
  padding: 0 20px;
  font-size: 14px;
`;

interface Add {}

interface Form {
  email: string;
}

const Add = ({}: Add) => {
  const [searchResult, setSearchResult] = useState<SearchUserResult | undefined>(undefined);
  const { register, handleSubmit } = useForm<Form>();

  const onValid = async (data: Form) => {
    const res = await searchUserApi({ email: data.email });

    setSearchResult(res as SearchUserResult);
  };
  console.log(searchResult);
  return (
    <>
      <SearchBox onSubmit={handleSubmit(onValid)}>
        <Input {...register('email')} placeholder="친구 이메일" />
        <span>친구의 이메일을 검색해 친구 추가 하세요</span>
      </SearchBox>
      {searchResult && searchResult.result && (
        <ResultBox>
          {searchResult.user ? <FriendBox name={searchResult.user.name} /> : <NotFound>검색 결과가 없습니다.</NotFound>}
        </ResultBox>
      )}
    </>
  );
};

Add.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout hasSidebar hasHeader title="친구 추가">
      {page}
    </Layout>
  );
};

export default Add;

export const getServerSideProps = async (ctx: any) => {
  await protectedLogin(ctx);
  return {
    props: {},
  };
};
