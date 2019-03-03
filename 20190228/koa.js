const koa = require('koa');
const app = new koa();

const md1 = async (ctx, next) => {
  ctx.body = '666';
  try {
    await next();
  } catch (error) {
    console.log(error)
  }
}

const md2 = async (ctx, next) => {
  ctx.body = '777';
  throw new Error('in md2')
  await next();
}

const md3 = async (ctx, next) => {
  ctx.body = '888';
  await next();
  throw new Error('in md3')
}

app.use(md1);

app.use(md2);

app.use(md3);

app.listen(8888);

console.log('8888 is online')
