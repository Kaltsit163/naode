const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-body');

const app = new Koa();
const router = new Router();

let users = {};

app.use(bodyParser());

router
  .get('/user/:id/data', async (ctx, next) => {
    const id = ctx.params.id;
    ctx.body = {
      data: users[id] || {}
    };
  }).post('/user/:id/data', async (ctx, next) => {
    const id = ctx.params.id;
    const { data } = ctx.request.body;
    users[id] = data;
    ctx.body = {
      data: users[id] || {}
    }
  }).del('/user/:id/data', async (ctx, next) => {
    const id = ctx.params.id;
    users[id] = {};
    ctx.body = {
      data: users[id] || {}
    }
  });

app.use(router.routes());

app.listen(6666);

console.log('6666 is on');
