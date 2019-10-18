const Router = require('koa-router');
const router = new Router();

let users = {};

router.get('user', '/:id/data', async (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = {
    data: users[id] || {}
  };
});

router.post('user', '/:id/data', async (ctx, next) => {
  const id = ctx.params.id;
  const { data } = ctx.request.body;
  users[id] = data;
  ctx.body = {
    data: users[id] || {}
  }
});

router.del('user', '/:id/data', async (ctx, next) => {
  const id = ctx.params.id;
  users[id] = {};
  ctx.body = {
    data: users[id] || {}
  }
})

module.exports = router;
