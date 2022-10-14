import { ReactElement } from 'react';

import { useForm } from 'react-hook-form';

import registerApi from '@libs/client/api/registerApi';

import Layout from '@components/common/Layout';

interface Form {
  email: string;
  name: string;
  password: string;
}

const Register = () => {
  const { register, handleSubmit } = useForm<Form>();

  const onValid = async (data: Form) => {
    const res = await registerApi(data);

    console.log(res);
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register('email')} placeholder="email" />
      <input {...register('name')} placeholder="name" />
      <input {...register('password')} type="password" placeholder="password" />
      <button>제출</button>
    </form>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Register;

export const getServerSideProps = async (ctx: any) => {
  return {
    props: {},
  };
};
