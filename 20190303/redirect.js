const koa = require('koa');
const app = new koa();

app.use(async (ctx, next) => {

  ctx.response.redirect('/local');
});

app.listen(8888);

console.log('app is on');
