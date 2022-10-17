import { ReactElement } from 'react';
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import enterApi from '@libs/client/api/enterApi';

import Layout from '@components/common/Layout';
import Input from '@components/ui/Input';
import FormButton from '@components/ui/FormButton';
import Logo from '@components/common/Logo';
import { validation } from '@libs/utils';
import FormInput from '@components/ui/FormInput';
import { useRouter } from 'next/router';
import protectedLogout from '@libs/client/protectedLogout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 40px 60px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const LinkBox = styled.div`
  margin-top: 40px;
  font-size: 14px;
  color: ${(props) => props.theme.lightTextColor};
`;

interface Form {
  email: string;
  password: string;
}

const Enter = () => {
  const { register, handleSubmit, setError, formState } = useForm<Form>();
  const router = useRouter();

  const onValid = async (data: Form) => {
    const validationResult = validation(data);
    if (!validationResult.result) {
      setError(validationResult!.target as 'email' | 'password', {
        message: validationResult.message,
      });
      return;
    }

    const res = await enterApi(data);

    if (res.result) {
      router.push('/');
    } else {
      setError('password', {
        message: res.error,
      });
    }
  };
  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit(onValid)}>
        <FormInput
          {...register('email', {
            required: '이메일을 입력해주세요.',
          })}
          placeholder="이메일"
          error={formState.errors.email?.message}
        />
        <FormInput
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
          })}
          type="password"
          placeholder="비밀번호 (8자 이상)"
          error={formState.errors.password?.message}
        />
        <FormButton>로그인</FormButton>
      </Form>
      <LinkBox>
        <Link href="/register">
          <a>회원가입</a>
        </Link>
      </LinkBox>
    </Container>
  );
};

Enter.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Enter;

export const getServerSideProps = async (ctx: any) => {
  await protectedLogout(ctx);
  return {
    props: {},
  };
};
