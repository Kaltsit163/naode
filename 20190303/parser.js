const Koa = require('koa');
const BodyParser = require('koa-body');

const app = new Koa();

app.use(BodyParser({}));

app.use(async (ctx, next) => {
  const { body } = ctx.request;
  console.log(body);
  ctx.body = 'get'
});

app.listen(6666);


