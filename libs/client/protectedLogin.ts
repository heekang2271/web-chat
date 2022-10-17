import getUserApi from './api/getUserApi';

const protectedLogin = async (ctx: any) => {
  const res = await getUserApi(undefined, ctx);

  if (!res.result) {
    ctx.res.setHeader('Location', '/enter');
    ctx.res.statusCode = 302;
    ctx.res.end();
  }
};

export default protectedLogin;
