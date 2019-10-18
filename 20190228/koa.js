const koa = require('koa');
const app = new koa();

const server = async (ctx, next) => {
  ctx.body = '666';
  try {
    await next();
  } catch (error) {
    console.log(error)
  }
}

app.use(server);

app.listen(8888);

console.log('8888 is online')
