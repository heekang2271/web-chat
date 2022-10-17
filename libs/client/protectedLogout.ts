import getUserApi from './api/getUserApi';

const protectedLogout = async (ctx: any) => {
  const res = await getUserApi(undefined, ctx);

  if (res.result) {
    ctx.res.setHeader('Location', `/`);
    ctx.res.statusCode = 302;
    ctx.res.end();
  }
};

export default protectedLogout;
