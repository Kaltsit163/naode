const koa = require('koa');
const app = new koa();
const fs = require('fs');

const read = async (ctx, next) => {
  ctx.response.set('Content-Type', 'text/html')
  ctx.body = fs.createReadStream('./index.html');
}

app.use(read);

app.listen(8888);

console.log('app is on');
