const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-body');

const app = new Koa();
const router = new Router();

let users = [];

app.use(bodyParser());

router
  .get('/user', async (ctx, next) => {
    ctx.body = {
      data: users
    }
  }).post('/user', async (ctx, next) => {
    const { user } = ctx.request.body;
    users.push(user);
    ctx.body = {
      data: users
    }
  }).del('/user')

app.use(router.routes());

app.listen(6666);

