const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-body');

const app = new Koa();

const MiddleWare = (options) => {
  return async (ctx, next) => {
    if (options && options.loadUser) {
      const user = await db.findUser();
      ctx.state.user = user;
    } else {
      await next();
    }
  }
}

app.use(MiddleWare);

app.use(BodyParser());

app.listen(6666);


